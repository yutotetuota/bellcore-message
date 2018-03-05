<img src="http://vertcore.io/css/images/module-message.png" alt="vertcore message" height="35">
# Vertcoin Message Verification and Signing for Vertcore


[![NPM Package](https://img.shields.io/npm/v/vertcore-message.svg?style=flat-square)](https://www.npmjs.org/package/vertcore-message)
[![Build Status](https://img.shields.io/travis/vertcoin-project/vertcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/vertcoin-project/vertcore-message)
[![Coverage Status](https://img.shields.io/coveralls/vertcoin-project/vertcore-message.svg?style=flat-square)](https://coveralls.io/r/vertcoin-project/vertcore-message?branch=master)

vertcore-message adds support for verifying and signing vertcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main vertcore repo](https://github.com/vertcoin-project/vertcore) for more information.

## Getting Started

```sh
npm install vertcore-message
```

```sh
bower install vertcore-message
```

To sign a message:

```javascript
var vertcore = require('vertcore-lib');
var Message = require('vertcore-message');

var privateKey = vertcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/vertcoin-project/vertcore/blob/master/CONTRIBUTING.md) on the main vertcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/vertcoin-project/vertcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
