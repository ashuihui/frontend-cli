const pkg = require('../package.json');
const semver = require('semver'); // npm的语义版本包
const chalk = require('chalk');
const execSync = require('child_process').execSync

module.exports = {
    checkCliUpdate: function () {
        const pkgName = pkg.name
        const version = pkg.version
        const ltsVersion = execSync(`npm view ${pkgName} version --registry=https://registry.npm.taobao.org`) + '';
        if (ltsVersion.trim() !== version) {
            console.log(
                chalk.red(
                    `cli 版本过旧，建议执行 npm i -g ${pkgName}@latest 升级 cli： ${version} -> ${ltsVersion} 
                    Please upgrade ${pkgName}`
                )
            );
        }
    },
    checkNodeVersion: function () {
        if (!semver.satisfies(process.version, pkg.engines.node)) {
            console.log(
                chalk.red(
                    `node 版本过低，需要node升级到 ${wanted} 以上。
                You are using Node ${process.version} , but this version of ${pkg.name} requires Node ${wanted}. 
                Please upgrade your Node version.`
                )
            );
            process.exit(1);
        }
    },
    checkGit: function () {
        try {
            // 执行shell
            execSync('git --version', { stdio: 'ignore' });
            return true
        } catch (error) {
            console.log(
                chalk.red(
                    `请先安装git。
               You should install git before!`
                )
            );
            process.exit(1);
        }
    },
}