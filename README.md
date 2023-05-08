# Babel Pile

A forever growing organised collection of various AI datasets to eventually encompass the knowledge of all humankind.
Where AI engineers can quickly and easily choose curated pre-filtered datasets for their use.

Named after both the "Library of Babel" and "The Pile"

# Idea behind the Babel Pile ?

Currently for the RWKV project, the [dataset discord channel](https://discord.gg/uMpzuDwcu5) is constantly being added with links to new idea / datasources to help better train and improve the RWKV AI model.

This project is an effort to better organize all the various datasources for AI training usage.
 
This project is intentionally designed to **not** hold any of the datasets themselves, rather containing pointers to them and providing the scripts to rapidly download them onto your local device if needed.
 
All data here will be organized into the various phases of the community effort to crawl, parse, cleanup, and deduplicate the data.
 
The structure of the Babel Pile is intentionally designed to facilitate community based contributions, which in many cases may not involved coding or even machine learning itself. It also allow community contributions in a way that would allow more specialized individuals from their respective domain background or nationality to maintain a subset of the "Babel Pile".
 
For AI model builders, the datasets are preorganized in a way to allow them to easily pick and choose the desired datasets for their use cases in various stages of the AI training process.
 
# General rules for dataset to be on the Babel Pile

- All dataset is expected to be fully hosted exclusively in a reliable AI data hosting provider of either
	- github
	- huggingface
- All dataset should have their downloadable links exposed, in addition to their repo link
	- This is a hard requirement, as the final dataset scale could possibly span PETABYTES
	- Note that the download link / script is handled differently from the git repo. As such it is possible for a single git repo to be split across multiple categories
    - As a general rule of thumb, this repo should not contain any actual data at all, and should instead function as a sort of index
- All datasets must have permissive / opensource public licensing, which needs to be indicated. This rule is applied in the strictest sense for cleaned and parsed data
- All datasets (raw-clean) should be in their full original lengths where possible. To take full advantage of RWKV "infinite context length", we should avoid splitting into fixed context lengths
- Parsed datasets should be in chunks of approximate 100M (soft rule), allowing model builders to easily cherrypick which should be their training / test data pairs
- Unparsed datasets should not assume or lock in how the boundary tokens are trained. This allow the data to be easier adapted for target use cases
 
> Feedback on this would be appreciated

# How the dataset should be organized

All dataset is either classified into the following top level categories

- 1-FDN : foundation training data
- 2-TRN : translation pairs training data
- 3-INS : instruction training data

The top level classification, will have more details for their sub category

# Dataset stages

Dataset, within their respective categories, will be further classified with the following stages representing their data quality.

- IDA : Raw data links, or raw ideas, typically an external datasource that is either needs to be crawled, and organized into huggingface first, or incomplete ideas or theory. The barrier of entry here should be as low as possible.
- RAW : Crawled data, from the raw datasources, formatted into a common/resonable format. These are raw links and ideas promoted here by community effort
- CLN : Crawled data, which is then cleanedup, annotated, and deduplicated (within itself) or split into smaller more focused datasets.

With the following final stages for parsed data

- PD1 : Human-level, parsed dataset, of the strictest level, nothing in here conflicts with other PD1 datasets, nor have duplicate data with each other. By default all existing large dataset do not qualify for this category, unless proven otherwise.
- PD2 : Human-level, parsed dataset, which do not conflict with PD1, but may have documented conflicts with other PD2 dataset. A priority level between conflicting PD2 should be established to quickly and easily resolve such conflicts programatically.
- PD3 : Parsed dataset, which may have minor conflicts with other PD1 / PD2 data, but due to their size or usefulness is commonly included anyway (eg. wikipedia). PD3 is still required to be dedupped, to avoid conflict with one another as a guideline. AI generated content, or automatic OCR, or automatic trasnlation data, that is unfiltered manually in a strict fashion, falls into this category, and cannot be promoted to PD1/2 without extensive human vetting and filtering.
- PD4 : Parsed dataset, with some onging level of cleanup efforts and maybe candidate for PD3 or higher, this typically represents ongoing dedup efforts, etc.
- PD5 : Parsed dataset, with minimal ongoing efforts in cleanup or dedup. This is typically an experimental dumping ground for specific use cases.

Conceptually, for an AI trainer, the fastest way to get started is to include all of PD1-3 data, filtered accroding to your use case. While handpicking PD4-5 dataset of specific interest for your uses.

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

# Download / Setup scripts

> @TODO, this is purely conceptual as of now, the scripts do not exists, and the commands WILL change

To pre-download all the relevent foundation data you will need in training, go to the respective directory and run the dataset level you want to load

```
cd 1-FDN
./download-dataset.sh PD1
./download-dataset.sh PD2
```

For more complicated downloading / filter rules, you would want to apply the filters accordingly

```
./download-dataset.sh --type=jsonl --license=public PD1
./download-dataset.sh --type=jsonl --license=public PD2
```

---

# open question for discussions

1) Should subrepos be presented as
	- links, with a setup script, and a gitignore preconfigured
	- submodule

2) What should be our preferred dataformat
	- Personally i prefer JSONL, but I AM BIAS, so yea ....

3) Classification? What should we change

4) Instruction training dataset, classification needs major consideration (call for help)

5) We should probably reserve the dataset tagging / download script questions to after we have the first 50 dataset organized ???

6) How does this fit in with the world model project?
