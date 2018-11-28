'use strict';

module.exports = {
    syscoinDockerFromBranch: (branch) => require('../templates/docker.build')(branch),
};
