const program = require('commander'); // 命令行工具
const chalk = require('chalk');
const init = require('./init');

module.exports = {
    init: function () {
        if (!process.argv.slice(2).length) {
            program.outputHelp();
        }
        program
            .command('init <project-name>')
            .description('初始化项目 init project')
            .alias('i')
            .action((projectName, cmd) => {
                init(projectName)
            });
        program
            .command('add <template-name> <git-repo-address>')
            .description('增加模板 add template')
            .alias('a')
            .action((templateName, gitRepoAddress, cmd) => {
                console.log(
                    chalk.red(
                        `This is not ok. todo!`
                    )
                );
            });
        program
            .command('addCommon <git-repo-address>')
            .description('add git subtree')
            .action((gitRepoAddress, cmd) => {
                console.log(
                    chalk.red(
                        `This is not ok. todo!`
                    )
                );
            });
        program
            .command('pullCommon')
            .description('git pull subtree')
            .action((cmd) => {
                console.log(
                    chalk.red(
                        `This is not ok. todo!`
                    )
                );
            });
        program
            .command('pushCommon')
            .description('git push subtree')
            .action((cmd) => {
                console.log(
                    chalk.red(
                        `This is not ok. todo!`
                    )
                );
            });
        program
            .command('update')
            .description('升级一个老的项目。请谨慎，这将直接覆盖配置项！Update projects,will rewrite project!')
            .alias('u')
            .action((cmd) => {
                console.log(
                    chalk.red(
                        `This is not ok. todo!`
                    )
                );
            });
        program.parse(process.argv);
    }
}

