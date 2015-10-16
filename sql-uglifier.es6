#! /usr/bin/env node

/* jshint node: true, esnext: true */
'use strict';

let path = require('path');
let fs = require('fs');
let program = require('commander');
let replaceStream = require('replacestream');

program
  .version('1.0.1');
// .option('-w, --write', 'Replace the given file with the uglified one')
// .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')

program.on('--help', function() {
  console.log('  Examples:');
  console.log('');
  console.log('    $ uglify-sql myscript.sql');
  console.log('                   # Outputs to the standard output');
  console.log('');
  console.log('    $ uglify-sql myscript.sql > uglified-script.sql');
  console.log('                   # Redirects the output to the desired file');
  console.log('');
});

program.parse(process.argv);

program.args.forEach(function(filename) {
  let input = fs.createReadStream(filename)
    .pipe(replaceStream(/--.*\n/g, ''))
    .pipe(replaceStream(/\/\*(?:[\s\S]*?)\*\//g, ''))
    .pipe(replaceStream(' =', '='))
    .pipe(replaceStream('= ', '='))
    .pipe(replaceStream('( ', '('))
    .pipe(replaceStream(' )', ')'))
    .pipe(replaceStream('\n', ' '))
    .pipe(replaceStream(/ +/g, ' '))
    .pipe(replaceStream(/^ /g, ''));

  if (program.write) {
    console.log("Not implemented");
    // input.pipe();
  } else {
    input.pipe(process.stdout);
  }

});