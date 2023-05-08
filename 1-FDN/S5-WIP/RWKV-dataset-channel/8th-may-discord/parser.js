// The following is an improvised parser script,
// used to parse the various link data found in the discord chat

// Lets build the giant message array
let messages = [];

// Lets parse each page worth of raw JSON data
for(let i=1; i<=12; ++i) {
	let data = require(`./raw/pg${i}.json`);
	messages.push( data.messages );
	messages = messages.flat();
}

// The link set map to build up
// Also provides basic deduplication of exact links
let linkSetMap = {};

// Lets parse all the embeds links first
for(const msg of messages) {
	// Get the message timestamp
	let timestamp = msg.timestamp;

	// Get the embeds
	let embeds = msg.embeds || [];

	// Iterate the embeds
	for(const embed of embeds) {
		// Normalize embed timestamp
		embed.timestamp = embed.timestamp || timestamp;

		// Getr the URL
		let url = embed.url;

		// Skip if no URL
		if(!url) continue;

		// Check for existing link set
		let linkSet = linkSetMap[url];

		// If existing linkset timestamp is older, skip
		if(linkSet && linkSet.timestamp < embed.timestamp) continue;

		// Add the embed link set
		linkSetMap[url] = embed;
	}
}

// Lets parse the messages content for links
for(const msg of messages) {
	// Get the message timestamp
	let timestamp = msg.timestamp;

	// Get the content
	let content = msg.content;

	// Skip if no content
	if(!content) continue;

	// Extract the links
	let links = content.match(/https?:\/\/[^\s]+/g) || [];

	// Filter out trailing ">" if present
	links = links.map(link => link.replace(/[>,)\]]*$/, ''));
	
	// For each link, check if it exists in the link set map
	for(const link of links) {
		// Check for existing link set
		if( linkSetMap[link] ) {
			// Change the timestamp to the older o
			if( timestamp > linkSetMap[link].timestamp ) {
				linkSetMap[link].timestamp = timestamp;
			}
			continue;
		}

		// Add the embed link set
		linkSetMap[link] = {
			url: link,
			timestamp: timestamp
		};
	}
}

// Lets convert the set map into an array, and sort by timestamp
let linkSetArray = Object.values(linkSetMap).sort((a, b) => a.timestamp < b.timestamp);

// Lets filter out for only url, title, description, provider name and timestamp
linkSetArray = linkSetArray.map(linkSet => {
	return {
		url: linkSet.url,
		title: linkSet.title || "",
		description: linkSet.description || "",
		provider: linkSet.provider && linkSet.provider.name || "",
		timestamp: linkSet.timestamp
	}
});

// Output as a CSV file
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
	path: 'links.csv',
	header: [
		{ id: 'url', title: 'URL' },
		{ id: 'title', title: 'Title' },
		{ id: 'description', title: 'Description' },
		{ id: 'provider', title: 'Provider' },
		{ id: 'timestamp', title: 'Timestamp' }
	],
	alwaysQuote:true
});

csvWriter.writeRecords(linkSetArray).then(() => {
	console.log('links.csv generated');
});