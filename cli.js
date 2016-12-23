#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const speak = require('./index')
const arg = argv._[0]

if (arg.split(' ').length > 1) {
  speak(argv._[0])
  return
}

speak(undefined, undefined, argv._[0])
