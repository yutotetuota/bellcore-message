# Bellcoin Message Verification and Signing for Bellcore

bellcore-message adds support for verifying and signing bellcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bellcore repo](https://github.com/yutotetuota/bellcore) for more information.

## Getting Started

```sh
npm install git://github.com/yutoteuota/bellcore-message.git
```

```sh
bower install git://github.com/yutoteuota/bellcore-message.git
```

To sign a message:

```javascript
var bitcore = require('bellcore-lib');
var Message = require('bellcore-message');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/yutotetuota/bellcore/blob/master/CONTRIBUTING.md) on the main bellcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/yutotetuota/bellcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
