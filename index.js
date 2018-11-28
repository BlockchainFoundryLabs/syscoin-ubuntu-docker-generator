#!/usr/bin/env node
'use strict';

require('events').EventEmitter.defaultMaxListeners = 50;

const chalk = require('chalk');

const displayHeader = require('./tasks/displayHeader');
const generateFiles = require('./tasks/generateFiles');
const buildDockerImages = require('./tasks/buildDockerImages');
const releaseDockerRunImage = require('./tasks/releaseDockerRunImage');

const run = async () => {
    try {

        if (!process.env.BRANCH) {
            console.log(chalk.red(JSON.stringify('BRANCH was not specified!')));
            console.log('Please specify `BRANCH=dev-3.x-prep-3.1.5` before `npm run start`');
            return 1
        }

        const branch = process.env.BRANCH;

        await displayHeader;

        await generateFiles(branch);

        await buildDockerImages();

        await releaseDockerRunImage(branch);


    } catch (err) {
        console.log(chalk.red(JSON.stringify(err)));
    }
};

run();
