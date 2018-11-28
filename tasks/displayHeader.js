'use strict';

const chalk = require('chalk');
const figlet = require('figlet');
const { clearConsole } = require('../lib/utils');

clearConsole();

const banner1 = figlet.textSync(
    'SyscoinD',
    {
        font: 'colossal',
    },
    function(err, data) {
        if (err) {
            throw 'Something went wrong during banner1 creation.';
        }
        return data;
    },
);

const banner2 = figlet.textSync(
    'wizard',
    {
        font: 'univers',
    },
    function(err, data) {
        if (err) {
            throw 'Something went wrong during banner2 creation.';
        }
        console.log(data);
    },
);

module.exports = console.log(
    chalk.yellow(banner1),
    chalk.yellow(banner2),
    '\n\n\n',
);
