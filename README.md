# Babel Pile

A forever growing organised collection of various AI datasets, to eventually encompass the knowledge of all humankind.
Where AI engineers, can easily choose curated pre-filtered datasets for their use, quickly and easily.

Name after both the "Library of Babel" and "The Pile"

# Idea behind the Babel Pile ?

Currently for the RWKV project, the [dataset discord channel](https://discord.gg/uMpzuDwcu5) is constantly being added with links to new idea / datasources to help better train and improve the RWKV AI model.

This project is an effort to better organize all the various datasource, for AI training usage.

As such this project is intentionally designed to **not** hold any of the dataset itself, but mearly points to it, and provide the scripts to rapidly download them onto your local device if needed.

All data here will be organized into the various phases, of the community effort to crawl, parse, cleanup, and deduplicate the data.

# General rules for dataset to be on the Babel Pile

- All dataset is expected to be fully hosted exclusively in a reliable AI data hosting provider of either
	- github
	- huggingface
- All dataset should have their downloadable links exposed, in addition to their repo link.
- All dataset is expected to have opensource public licensing

- All dataset is either classified into the following main categories
	- foundation
	- instruction

- With the following sub categories, modified from the [Dewey Decimal System](https://en.wikipedia.org/wiki/List_of_Dewey_Decimal_classes)
	- General Knowledge
	- Math
	- Code
	- Science & Technology
	- Arts and Entertainment
	- Culture (news, politics, etc)
	- Philosophy
	- Religion
	- Fiction
	- Language (translation focused, to help train cross language understanding)
	- Hybrid (special category, for dataset that cross all boundries. ie: wikipedia)
	- Others (reserved for edge cases)

000 – Computer science, information and general works
100 – Philosophy and psychology
200 – Religion
300 – Social sciences
400 – Language
500 – Pure science
600 – Technology
700 – Arts and recreation
800 – Literature
900 – History and geography

> Open question : How should we further organize

# The stages of organizing the dataset

- raw : Raw data links, or raw ideas, typically an external datasource that is either needs to be crawled, and organized into huggingface first, or incomplete ideas or theory. The barrier of entry here should be as low as possible.
- crawl : Crawled data, from the raw datasources, formatted into a common/resonable format. These are raw links promoted here by community effort
- clean : Crawled data, which is then cleanedup, annotated, and deduplicated (within itself) or split into smaller more focused datasets.

- parsed : Parsed datasets are designed for usage with