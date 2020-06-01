
const ora = require('ora');
const chalk = require('chalk');
const prompt = require('./prompt');
const path = require('path')
const validateProjectName = require('validate-npm-package-name');
const fs = require("fs");
const git = require("./git");
let init = async projectName => {
    console.log(
        chalk.green(
            `Thank you for using the project. 
Readme:https://github.com/ashuihui/frontend-cli/blob/master/README.md
Also, the author of frontend-cli-shui is looking for a good job!\n `
        )
    );
    if (projectName === undefined) {
        console.log(
            chalk.red(
                `创建项目的时候，请输入项目名`
            )
        );
    } else {
        const cwd = process.cwd();
        const targetDir = path.resolve(cwd, projectName);
        const validateResult = validateProjectName(projectName);
        if (!validateResult.validForNewPackages) {
            console.error(chalk.red(`Invalid project name: "${name}"`));
            validateResult.errors &&
                validateResult.errors.forEach(error => {
                    console.error(chalk.red(`Error: ${error}`));
                });
            validateResult.warnings &&
                validateResult.warnings.forEach(warn => {
                    console.error(chalk.red(`Warning: ${warn}`));
                });
            process.exit(1);
        }
        if (fs.existsSync(targetDir)) {
            console.error(chalk.red(`project name is exist: "${name}"`));
            process.exit(1);
        }

        prompt().then(answer => {
            console.log('answers=>', answer);
            let loading = ora('downloading template...');
            loading.start('downloading template...');
            let Api = '';
            switch (answer.frame) {
                case 'spa':
                    Api = 'https://github.com:ashuihui/react-template#spa';
                    break;
                case 'mspa':
                    Api = '';
                    console.error(chalk.red(`mspa is no ok!`));
                    process.exit(1);
                    break;
                default:
                    break;
            };
            git.downloadTemplate(Api,projectName)
                .then((temDir) => {
                    loading.succeed('模板下载完成');
                    // 下载完成后,根据用户输入更新配置文件
                    //todo
                }, (err) => {
                    console.error(chalk.red(`模板下载失败,Error: ${err}`));
                    process.exit(1);
                });
        });
    }
};

module.exports = init;