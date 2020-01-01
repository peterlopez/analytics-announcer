# Analytics Announcer

A Chrome extension for creating custom Google Analytics alerts.

Built using:
- [Vue.js v2](https://vuejs.org/)
- [Vue Material](https://vuematerial.io)
- [Gulp.js v4](https://gulpjs.com/)
- [Webpack v3](https://webpack.js.org/)
- [Google Analytics Reporting API v4](https://developers.google.com/analytics/devguides/reporting/core/v4)
- [Google Analytics Management API v3](https://developers.google.com/analytics/devguides/config/mgmt/v3)
- [Google Chrome Extension API](https://developer.chrome.com/extensions/overview)

## Installation

Install the official version of the extension from the [Chrome Web Store](https://chrome.google.com/webstore).

To install a developer build, follow the [Development Setup](https://github.com/peterlopez/analytics-announcer#development-setup) instructions below.

## Development Setup

### Requirements

The following software should be installed:

- Node
- NPM or Yarn
- NPM `gulp-cli` package installed globally

For OAuth, create the following files in the root project directory:

- `oauth_client_id.json` - OAuth Client ID from [Google API console](https://console.developers.google.com/apis)
- `webstore_key.json` - Chrome Webstore public key used to get OAuth Client ID

See [OAuth Registration](https://github.com/peterlopez/analytics-announcer#oauth-registration) section below for more details.

### OAuth Registration

In order for a copy of this extension to perform authentication with Google Analytics accounts via OAuth, perform the following steps:

1. Upload packaged .zip file from `dist/` to the [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).
1. Copy public key from Chrome Developer Dashboard into `manifest.json`
1. Go to [Google API console](https://console.developers.google.com/apis) and create a project
1. Create OAuth Client ID credentials, pasting in Application ID from Chrome Developer Dashboard
1. Copy OAuth Client ID into `manifest.json`
1. Return to the Google API console and select Library from the sidebar. Search for "Google Analytics API", click on the correct result and enable it.

More detailed information can be found in Chrome's [OAuth Guide](https://developer.chrome.com/extensions/tut_oauth).

### Building the extension

The build system uses a combination of Gulp.js along with Webpack + `vue-loader`. Gulp.js prepares the necessary assets for making a Chrome extension, like the `manifest.json` file. Then, Webpack simply bundles the Vue.js app along with its dependencies into a single .js file that is loaded and run from an HTML file.

In a terminal, from the project root directory, run:

``` bash
# install dependencies
npm install

# start webpack hot reloading
npm run dev

# in a separate process, start Gulp
gulp watch
```

### Installing a developer build

After following the steps above to build the extension, the extension can be loaded into Chrome by:

1. Navigate to `chrome://extensions`
1. Select "Developer Mode" and then click "Load unpacked"
1. From the file browser, select the `build/` directory within project

## Deployment

In a terminal,

``` bash
# build for production
npm run prod
```

## License - ISC

Copyright 2019 Peter Lopez

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
