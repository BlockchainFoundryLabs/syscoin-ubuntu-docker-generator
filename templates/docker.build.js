'use strict';

module.exports = (branch) => `FROM ubuntu-dev
RUN git clone https://github.com/syscoin/syscoin --branch ${branch} --single-branch --depth 1
`;
