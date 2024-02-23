#!/usr/bin/env node

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');

const start = debounce(() => {
  console.log('Starting program');
}, 100);

chokidar
  .watch('.')
  .on('add', start)
  .on('change', () => console.log('File Changed'))
  .on('unlink', () => console.log('File Unlinked'));