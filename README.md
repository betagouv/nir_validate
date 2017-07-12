Validation API for the french NIR
------

Parse and validate the french NIR, based on the [wikipedia definition](https://fr.wikipedia.org/wiki/Num%C3%A9ro_de_s%C3%A9curit%C3%A9_sociale_en_France#lien_F).
> Validation des codes NIR - NIRPP - Numéro de sécurité social


## Install
```
$ npm install nirpp_utils
```

## Usage

### Validation
```js
const nirpp_validate = require('nirpp_utils');

nirpp_utils.validate('255081416802538');
// => true

nirpp_utils.validate('255081416802539');
// => false

nirpp_utils.validate('2 55 08 14 168 025 38');
// => true
```

#### Options

* shouldClean - set this to `false` to become white-space and case sensitive


```js
nirpp_utils.validate('2 55 08 14 168 025 38', {shoudlClean: false});
// => false
```
