All datasets within the "1-FDN" series, should be further subclassified into the following sub-categories

**Organizing the foundation dataset**

With the following sub categories, modified from the [Nippon Decimal Classification](https://en.wikipedia.org/wiki/Nippon_Decimal_Classification), which is modified from the american [Dewey Decimal Classification](https://en.wikipedia.org/wiki/List_of_Dewey_Decimal_classes)

| ID | Category Name       | Notes                                                                                 | Nippon Decimal | Dewey Decimal        |
|----|---------------------|---------------------------------------------------------------------------------------|----------------|----------------------|
| 00 | General Knowledge   | General purpose category                                                              | 000 - 099      | 000 - 090            |
| 10 | Philosophy          |                                                                                       | 100 - 199      | 100 - 109, 120 - 299 |
| 20 | History & Geology   |                                                                                       | 200 - 299      | 900 - 999            |
| 30 | Social Sciences     |                                                                                       | 300 - 399      | 300 - 379, 383 - 399 |
| 40 | Natural Sciences    |                                                                                       | 400 - 499      | 110 - 119, 500 - 599 |
| 50 | Tech & Engineering  |                                                                                       | 500 - 599      | 600 - 699            |
| 60 | Industry & Commerce |                                                                                       | 600 - 699      | 380 - 382            |
| 70 | Arts                |                                                                                       | 700 - 799      | 700 - 799            |
| 80 | Language            |                                                                                       | 800 - 899      | 400 - 499            |
| 90 | Literature          |                                                                                       | 900 - 999      | 800 - 899            |
| S1 | Math                | Special category for math training data                                               |                |                      |
| S2 | Code                | Special category for code training data                                               |                |                      |
| S3 | Hybrid              | Special collections, reserved for major mixed datasets (ie. wikipedia, commons crawl) |                |                      |
| S4 | Others              | Reserved for use cases that does not fit in all the above somehow                     |                |                      |
| S5 | WIP                 | Special WIP category, used to organize data efforts before its "sorted" properly      |                |                      |

Each of the above Category should have its respective "book" dataset. So that you can add any public domain books into the respective collection.

**Notes on the design of category names**

The "Nippon Decimal Classification" was intentionally choosen over the "Dewey Decimal Classification",
as its the easiest to translate from the "Dewey Decimal" system, while having significantly less "American Bias"

The point here is to not reinvent the whole wheel, and make use of the existing classification system libraries have been using for years
to organize the collection of knowledge, in a systematic manner (with the Dewey Decimal, being one of the most commonly used system)

This also allow debates on where such content should be assigned to, be resolved by simply looking up existing libraries classification. 

Additionally if we are uncertain for any piece of arbitary data, we can lookup its closest material in a library and use that as mapping instead.

> Open question : Should we use another system instead? If so which.
