'use strict';

const { getParent } = require('../lib/directory');
const { writeFile, checkIfFileExists, deleteIfFileExists } = require('../lib/files');
const { syscoinDockerFromBranch } = require('../lib/generate');

module.exports = async function generateFiles(branch) {
    try {
        console.log('Writing Dockerfile.build for branch: ', branch);
        const parentDir = getParent();
        const dockerfileBuildPath = `${parentDir}/syscoin-ubuntu-docker-generator/docker/build/Dockerfile.build`;

        const fileExists = await checkIfFileExists(dockerfileBuildPath);

        if (fileExists) {
            await deleteIfFileExists(dockerfileBuildPath);
        }

        await writeFile(dockerfileBuildPath, syscoinDockerFromBranch(branch));

    } catch (err) {
        err.message = `Something went horribly wrong during creation of Dockerfile.build file`;
        throw err;
    }
};
