#!/usr/bin/env node

var program = require('commander'), 
    randal = require('./14');

program
    .version('0.0.1')
    .on('--help', function(){
        console.log('  Example: \n');
        console.log('    $ randal joe sally bob');
        console.log('    bob joe sally\n');
    })
    .parse(process.argv);

console.log(randal.apply(null, program.args).join(' '));