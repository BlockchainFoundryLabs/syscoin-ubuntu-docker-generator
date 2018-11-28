'use strict';

const { exeCmd } = require('../lib/utils');

module.exports = async function buildDockerImages() {
    try {
        await exeCmd('cd docker/base/ && docker build -f Dockerfile.dev -t ubuntu-dev .');
        await exeCmd('cd docker/build/ && docker build -f Dockerfile.build -t syscoin-ubuntu-build .');
        await exeCmd('cd docker/install/ && docker build -f Dockerfile.install -t syscoin-ubuntu-bin .');
        await exeCmd('cd docker/run/ && docker build -f Dockerfile.run -t syscoin-ubuntu-run .');
    } catch (err) {
        err.message = `Something went horribly wrong during docker image creation`;
        throw err;
    }
};
