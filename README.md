# Syscoin-Ubuntu-Docker-generator

### Requirements
 - Node.js
 - Docker
 - Git

### Install
`npm install`

### Build Docker Images
```
BRANCH=<syscoin-github-branch> npm run start

// for example:

BRANCH=dev-3.x-prep-3.1.5 npm run start
```

>Please note that to deploy the image to the DockerHub, you'll need to be part of the https://hub.docker.com/u/blockchainfoundrylabs/ organization.

### Run
`docker run --name syscoin -it -p 8336:8336 syscoin-ubuntu-run`
