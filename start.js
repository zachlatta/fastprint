'use strict';

require('babel-polyfill');
require('babel-register');

let config = require('./config.js');
let printer = require('printer');

if (!config.PRINTER_NAME) {
  let printers = printer.getPrinters();

  console.error('Oh no! The PRINTER_NAME environment variable is required, ' +
                'but not set. Please set it to one of the following values:');
  console.error();
  console.error(printers.map(p => `- ${p.name}`).join('\n'));

  process.exit(1);
}

require('./server.js');
