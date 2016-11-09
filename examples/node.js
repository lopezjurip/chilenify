'use strict';

import chilenify from '../lib';

// ES5
// const chilenify = require('chilenify').default;

const sentence = chilenify('Hola que tal compadre', { perv: true });

console.log(sentence);
