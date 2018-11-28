'use strict';

const { exec } = require('shelljs');

module.exports = {
    clearConsole: () => process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'),
    exeCmd: async cmdString => await exec(cmdString, { cwd: process.cwd(), env: process.env, shell: '/bin/zsh', silent: false, stdio: 'inherit' }),
};
