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