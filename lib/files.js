'use strict';

const fs = require('fs');
const shell = require('shelljs');

module.exports = {
    checkIfFileExists: fileName => shell.test('-f', fileName),

    deleteIfFileExists: fileName => shell.rm(fileName),

    writeFile: (fileName, content) => fs.writeFileSync(fileName, content),
};
