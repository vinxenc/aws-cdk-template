# MediaLake
## Version: 2.0.0

### /files/{file_id}/history

#### GET
##### Description

Get File

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /files/{file_id}/tags

#### GET
##### Description

Get Tags for File

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### POST
##### Description

Add Tags for File

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |
| 409 | Tag already exists for File |

#### PATCH
##### Description

Update Tags for File

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### PUT
##### Description

Update or Create Tags for File

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### DELETE
##### Description

Delete Tags for File

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /files/{file_id}

#### GET
##### Description

Get File

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### PUT
##### Description

Replace File

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| file_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /assets/{asset_id}/files

#### GET
##### Description

Get Files for Asset

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| asset_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### POST
##### Description

Upload new File for Asset

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| asset_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /assets/{asset_id}/articles

#### GET
##### Description

Get Articles for Asset

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| asset_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /assets/{asset_id}

#### GET
##### Description

Get Asset

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| asset_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Asset with Attributes |

#### PATCH
##### Description

Update Asset

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| asset_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /assets

#### POST
##### Description

Create Asset

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /products/{product_id}/articles/{article_id}

#### PUT
##### Description

Attach Article to Product

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product_id | path |  | Yes | string (uuid) |
| article_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### DELETE
##### Description

Removes Article from Product

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product_id | path |  | Yes | string (uuid) |
| article_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /products/{product_id}/articles

#### GET
##### Description

Get Articles for Product

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product_id | path |  | Yes | string (uuid) |
| attributes | query |  | No | object |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /products/{product_id}

#### GET
##### Description

Get Product

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### PATCH
##### Description

Update Product

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### DELETE
##### Description

Delete Product

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| product_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /products

#### POST
##### Description

Create Product

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /articles/{article_id}/assets/{asset_id}

#### PUT
##### Description

Attach Asset to Article

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| article_id | path |  | Yes | string (uuid) |
| asset_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### DELETE
##### Description

Remove Asset from Article

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| article_id | path |  | Yes | string (uuid) |
| asset_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /articles/{article_id}/assets

#### GET
##### Description

Get Assets for Article

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| article_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /articles/{article_id}

#### GET
##### Description

Get Article

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| article_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### PATCH
##### Description

Update Article

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| article_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### DELETE
##### Description

Delete Article

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| article_id | path |  | Yes | string (uuid) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

### /articles

#### GET
##### Summary

List Articles

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| limit | query | Limits the number of articles returned in one request | No | integer |
| offset | query | Offsets the articles returned | No | integer |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | OK |

#### POST
##### Summary

Create Articles

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Created Article |

### Models

#### Checksum

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Checksum | string |  |  |

#### Tags

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Tags | object |  |  |

**Example**
<pre>{
  "foo": "Lorem",
  "bar": "Ipsum"
}</pre>

#### TagList

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| TagList | array |  |  |

**Example**
<pre>[
  {
    "Name": "foo",
    "Value": "Lorem"
  },
  {
    "Name": "bar",
    "Value": "Ipsum"
  }
]</pre>

#### File

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Id | string (uuid) |  | No |
| Checksum | string |  | No |
| ContentType | string |  | No |
| Extension | string |  | No |
| FileSize | number (int64) |  | No |
| Channel | string |  | No |

#### File-Tags-Object

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| File-Tags-Object | object |  |  |

#### File-Tags-Array

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| File-Tags-Array | object |  |  |

#### Gtin

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Gtin | string |  |  |

#### Product

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Id | string (uuid) |  | No |
| Gtin | string |  | No |

#### Attributes

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Attributes | object |  |  |

**Example**
<pre>{
  "foo": "Lorem",
  "bar": "Ipsum"
}</pre>

#### AttributesList

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AttributesList | array |  |  |

**Example**
<pre>[
  {
    "Name": "foo",
    "Value": "Lorem"
  },
  {
    "Name": "bar",
    "Value": "Ipsum"
  }
]</pre>

#### Asset

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Id | string (uuid) |  | No |
| Status | string |  | No |
| HasCopyright | boolean |  | No |
| LicenseValidUntil | dateTime |  | No |

#### Asset-Attributes-Object

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Asset-Attributes-Object |  |  |  |

#### Asset-Attributes-Array

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Asset-Attributes-Array |  |  |  |

#### ArticleAsset

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ArticleAsset |  |  |  |

#### PostArticle

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| PostArticle |  |  |  |

#### ExtendedArticle

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ExtendedArticle |  |  |  |

#### ExtendedArticle-Attributes-Object

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ExtendedArticle-Attributes-Object |  |  |  |

#### ExtendedArticle-Attributes-Array

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ExtendedArticle-Attributes-Array |  |  |  |

#### FullArticle-Attributes-Object

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| FullArticle-Attributes-Object |  |  |  |

#### FullArticle-Attributes-Array

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| FullArticle-Attributes-Array |  |  |  |

#### ExtendedProduct

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ExtendedProduct |  |  |  |

#### ExtendedAsset

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ExtendedAsset |  |  |  |

#### Error

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer |  | Yes |
| message | string |  | Yes |
