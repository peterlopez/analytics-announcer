# Analytics Announcer

A Chrome extension for creating custom Google Analytics alerts.

Built with Vue.js, Google Analytics Reporting API v4, and Google Analytics Management API v3

## Installation

View [Chrome Web Store](https://chrome.google.com/webstore)

## Development Setup

In a terminal,

``` bash
# download source code
git clone https://github.com/peterlopez/analytics-announcer
cd analytics-announcer/

# install dependencies
npm install

# build for development
npm run dev
```

Finally, load the extension into Chrome
1. Navigate to `chrome://extensions`
1. Select "Developer Mode" and then click "Load unpacked"
1. From the file browser, select the `build/` directory within project

## Deployment

``` bash
# build for production
npm run prod
```

## License - ISC

Copyright 2019 Peter Lopez

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
