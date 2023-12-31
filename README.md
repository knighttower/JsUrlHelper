
# urlHelper JavaScript Module Documentation

# Note:  
**For better maintenance, this library has been placed along with JsUtilities (https://github.com/knighttower/JsUtility) to create an easier entry point for many resources that will collaborate together**
--> only the docs will remain here for now.  

## Overview

The `urlHelper` module is a utility library for URL manipulation and navigation with the 'window' object.

---  

## Installation
```javascript
npm i @knighttower/js-utility-functions
```
```javascript
yarn add @knighttower/js-utility-functions
```
```javascript
import UrlHelper from '@knighttower/js-utility-functions';
```  

## In the browser  
It loads as a 'window' object --> window.urlHelper
```html
<script src=" https://cdn.jsdelivr.net/npm/@knighttower/js-utility-functions@latest/dist/browser/UrlHelper.min.js"></script>

// ---> Also available as ESM, UMD, CJS, JS
// ESM 
<script src="https://esm.run/@knighttower/js-utility-functions@latest/index.mjs"></script>
// UMD
<script src="https://cdn.jsdelivr.net/npm/@knighttower/js-utility-functions@latest/dist/umd/UrlHelper.min.js"></script>
// CJS
<script src="https://cdn.jsdelivr.net/npm/@knighttower/js-utility-functions@latest/dist/cjs/UrlHelper.min.js"></script>

```    

## Constants (gets)

### `fullUrl`

- **Type**: `string`
- **Description**: The full URL including the current page path.

### `siteUrl`

- **Type**: `string`
- **Description**: The root URL without the page path.

### `template`

- **Type**: `string`
- **Description**: The template URL for sites that use template folders.

### `protocol`

- **Type**: `string`
- **Description**: The server protocol (`http`/`https`).

### `host`

- **Type**: `string`
- **Description**: The name of the server.

### `path`

- **Type**: `string`
- **Description**: The current path.

### `readUrl`

- **Type**: `string`
- **Description**: A readable URL.  

---

## Methods

### `getPage()`

- **Returns**: `string`
- **Description**: Returns the current page name (Last part of the URL).

### `getParams()`

- **Returns**: `Object`
- **Description**: Returns the query object info from the current URL.

### `getQuery()`

- **Returns**: `string`
- **Description**: Returns the query string from the current URL.

### `addToQuery(query: Object)`

- **Parameters**: `query` (Object) - The query object to add.
- **Returns**: `Object`
- **Description**: Adds parameters to the current query string of the URL.

### `getHash()`

- **Returns**: `string`
- **Description**: Returns only the URL hash.

### `setHash(h: string)`

- **Parameters**: `h` (string) - The hash to set.
- **Description**: Sets the URL hash.

### `deleteHash()`

- **Description**: Removes the URL hash.

### `goTo(url: string)`

- **Parameters**: `url` (string) - The URL to go to.
- **Returns**: `boolean`
- **Description**: Goes to a specific URL on the same page.

### `open(url: string, name: string, params: string)`

- **Parameters**:
  - `url` (string) - The URL to open.
  - `name` (string) - The name attribute for the new window.
  - `params` (string) - The window parameters.
- **Returns**: `Window`
- **Description**: Opens a URL in the browser.

### `onChange(callback: function)`

- **Parameters**: `callback` (function) - The callback function to execute.
- **Description**: Executes a function if the current URL changes.

## Private Methods

### `parseURLParams()`

- **Returns**: `Object`
- **Description**: Parses and returns URL parameters.  
---

Checkout more cool stuff at https://knighttower.io/
