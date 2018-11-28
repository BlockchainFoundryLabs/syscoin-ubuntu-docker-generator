'use strict';

const { exeCmd } = require('../lib/utils');

module.exports = async function releaseDockerRunImage(branch) {
    try {
        const dockerImageIdRaw = await exeCmd('docker inspect --format="{{.Id}}" syscoin-ubuntu-run');
        const dockerImageIdSplit = dockerImageIdRaw.stdout.split(':');
        const dockerImageId = dockerImageIdSplit[1].substring(0, 12);

        await exeCmd(`docker tag ${dockerImageId} blockchainfoundryinc/syscoin-ubuntu-run:${branch}`);
        await exeCmd('docker push blockchainfoundryinc/syscoin-ubuntu-run');

    } catch (err) {
        err.message = `Something went horribly wrong during release of the syscoin-ubuntu-run Docker image file`;
        throw err;
    }
};
