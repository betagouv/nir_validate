Validation API for the french NIR
------

Parse and validate the french NIR, based on the [wikipedia definition](https://fr.wikipedia.org/wiki/Num%C3%A9ro_de_s%C3%A9curit%C3%A9_sociale_en_France#lien_F).
> Validation des codes NIR - NIRPP - Numéro de sécurité social


## Install
```
$ npm install nir_validate
```

## Usage
```js
const validate = require('nir_validate');

validate('255081416802538');
// => true

validate('255081416802539');
// => false

validate('2 55 08 14 168 025 38');
// => true
```

### Options

* shouldClean - set this to `false` to become white-space and case sensitive


```js
validate('2 55 08 14 168 025 38', {shoudlClean: false});
// => false
```
