'use strict';

const path = require('path');
const shell = require('shelljs');

module.exports = {
    create: dir => shell.mkdir('-p', dir),

    getCurrent: () => shell.pwd().stdout,

    getParent: () => path.dirname(module.exports.getCurrent()),
};
