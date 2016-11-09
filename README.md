# Chilenify

Turn spanish sentences to _chilean flaite_. Works on [Node.js](https://nodejs.org/en/), Browsers and [React-Native](https://facebook.github.io/react-native/).

Created with http://megaboilerplate.com/

> Orignal credits: http://www.pckz.cl/retrocesocultural/

## Getting started

Install with [yarn](https://yarnpkg.com/):

```sh
yarn add chilenify
```

Usage:

```js
import chilenify from 'chilenify';

// ES5
// const chilenify = require('chilenify').default;

const sentence = chilenify('Hola que tal compadre', { perv: true });

console.log(sentence);
// WENA QUE TAL SOCIO máZnáátèdííghó óèzíí
```

## Test

```sh
yarn test
```
