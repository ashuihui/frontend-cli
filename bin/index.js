#!/usr/bin/env node
const checkEnv = require('../utils/checkEnv');
const command = require('../utils/command');
class Cli {
    constructor() {
        checkEnv.checkNodeVersion();
        checkEnv.checkCliUpdate();
        checkEnv.checkGit();
        command.init();
    }
}

module.exports = new Cli()