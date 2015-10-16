/* jshint node: true, esnext: true */
'use strict';
let fs = require('fs');
let replaceStream = require('replacestream');

const filename = '/Users/pierre/coding/go/src/dedalus.eu/hsdo/_queries/giganteSelectSdo.sql';
// const filename = '/Users/pierre/coding/go/src/dedalus.eu/hsdo/_queries/prova.txt';

// Replace all the instances of 'birthday' with 'earthday'
fs.createReadStream(filename)
  .pipe(replaceStream(/--.*\n/g, ''))
  .pipe(replaceStream(/\/\*(?:[\s\S]*?)\*\//g, ''))
  .pipe(replaceStream(' = ', '='))
  .pipe(replaceStream('( ', '('))
  .pipe(replaceStream(' )', ')'))
  .pipe(replaceStream('\n', ' '))
  .pipe(replaceStream(/ +/g, ' '))
  .pipe(replaceStream(/^ /g, ''))
  .pipe(process.stdout);
