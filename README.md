# Babel Pile

A forever growing organised collection of various AI datasets, to eventually encompass the knowledge of all humankind.
Where AI engineers, can easily choose curated pre-filtered datasets for their use, quickly and easily.

Name after both the "Library of Babel" and "The Pile"

# Idea behind the Babel Pile ?

Currently for the RWKV project, the [dataset discord channel](https://discord.gg/uMpzuDwcu5) is constantly being added with links to new idea / datasources to help better train and improve the RWKV AI model.

This project is an effort to better organize all the various datasource, for AI training usage.

This project is intentionally designed to **not** hold any of the dataset itself, but mearly points to it, and provide the scripts to rapidly download them onto your local device if needed.

All data here will be organized into the various phases, of the community effort to crawl, parse, cleanup, and deduplicate the data.

The structure of the Babel Pile, is intentionally designed, to facilitate community based contributions, which in many cases, may not involved coding. Or even machine learning itself.

For AI model builders, the datasets are preorganized in a way for them to easily pick and choose the desired dataset for their use case, in various stages of the AI training process.

# General rules for dataset to be on the Babel Pile

- All dataset is expected to be fully hosted exclusively in a reliable AI data hosting provider of either
	- github
	- huggingface
- All dataset should have their downloadable links exposed, in addition to their repo link
- All dataset must have permissive / opensource public licensing, which needs to be indicated
- All dataset (raw-clean) when possible, should be in its full original length. We should avoid splitting into fix context length to take full advantage of RWKV "infinite context length"
- Parsed dataset, should be in chunks of approximate 100M (soft rule), this model builders to easily cherrypick which should be their training / test data pairs

> Feedback on this would be appreciated

# How the dataset should be organized

All dataset is either classified into the following top level categories

- FND : foundation training data
- TRN : translation pairs training data
- INS : instruction training data

Each of the top level category, have sub category classification rules.

**Organizing the foundation dataset**

With the following sub categories, modified from the [Nippon Decimal Classification](https://en.wikipedia.org/wiki/Nippon_Decimal_Classification), which is modified from the american [Dewey Decimal Classification](https://en.wikipedia.org/wiki/List_of_Dewey_Decimal_classes)

| Category Name       | Notes                                                                                 | Nippon Decimal | Dewey Decimal        |
|---------------------|---------------------------------------------------------------------------------------|----------------|----------------------|
| Math                | Special category for math training data                                               |                |                      |
| Code                | Special category for code training data                                               |                |                      |
| General Knowledge   | General purpose category                                                              | 000 - 099      | 000 - 090            |
| Philosophy          |                                                                                       | 100 - 199      | 100 - 109, 120 - 299 |
| History & Geology   |                                                                                       | 200 - 299      | 900 - 999            |
| Social Sciences     |                                                                                       | 300 - 399      | 300 - 379, 383 - 399 |
| Natural Sciences    |                                                                                       | 400 - 499      | 110 - 119, 500 - 599 |
| Tech & Engineering  |                                                                                       | 500 - 599      | 600 - 699            |
| Industry & Commerce |                                                                                       | 600 - 699      | 380 - 382            |
| Arts                |                                                                                       | 700 - 799      | 700 - 799            |
| Language            |                                                                                       | 800 - 899      | 400 - 499            |
| Literature          |                                                                                       | 900 - 999      | 800 - 899            |
| Hybrid              | Special collections, reserved for major mixed datasets (ie. wikipedia, commons crawl) |                |                      |
| Others              | Reserved for use cases that does not fit in all the above somehow                     |                |                      |
| WIP                 | Temporary category, used to organize data efforts before its "sorted" properly        |                |                      |

Each of the above Category should have its respective "book" dataset. So that you can add any public domain books into the respective collection.

**Notes on the design of category names**

The "Nippon Decimal Classification" was intentionally choosen over the "Dewey Decimal Classification",
as its the easiest to translate from the "Dewey Decimal" system, while having significantly less "American Bias"

The point here is to not reinvent the whole wheel, and make use of the existing classification system libraries have been using for years
to organize the collection of knowledge, in a systematic manner (with the Dewey Decimal, being one of the most commonly used system)

This also allow debates on where such content should be assigned to, be resolved by simply looking up existing libraries classification. 

Additionally if we are uncertain for any piece of arbitary data, we can lookup its closest material in a library and use that as mapping instead.

> Open question : Should we use another system instead? If so which.

# Dataset tagging

Every dataset in this collection will need to have a `collection.jsonc`, which would define the dataset.
This is used to allow the "download & build" script to quickly adapt the dataset to the respective use cases.

It should be in the following format

```
{
	// License of the dataset
	"license": "public domain"

	// ... rest to be decided ...
}
```

> This part is still a WIP

# The stages of organizing the dataset

- raw : Raw data links, or raw ideas, typically an external datasource that is either needs to be crawled, and organized into huggingface first, or incomplete ideas or theory. The barrier of entry here should be as low as possible.
- crawl : Crawled data, from the raw datasources, formatted into a common/resonable format. These are raw links promoted here by community effort
- clean : Crawled data, which is then cleanedup, annotated, and deduplicated (within itself) or split into smaller more focused datasets.

- parsed : Parsed datasets are designed for usage with