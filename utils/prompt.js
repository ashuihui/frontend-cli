
const inquirer = require('inquirer');

// 询问用户
let promptList = [
    {
        type: 'input',
        name: 'author',
        message: 'Please enter the author name: ',
        default: '',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the project description: ',
        default: '',
    },
    {
        type: 'list',
        name: 'frame',
        message: 'please choose this project template',
        choices: ['spa', 'mspa']
    },
    {
        type: 'list',
        name: 'device',
        message: 'please choose this project device',
        choices: ['pc', 'm']
    },
    // {
    //     type: 'list',
    //     name: 'style',
    //     message: 'please choose this project CSS language ',
    //     choices: ['sass', 'less']
    // },
    {
        type: 'list',
        name: 'adapter',
        message: 'please choose this project screen adapter ',
        choices: ['vw', 'rem']
    },
    // {
    //     type: 'list',
    //     name: 'install',
    //     message: 'please choose this project install function ',
    //     choices: ['npm', 'yarn']
    // },
    // {
    //     type: 'list',
    //     name: 'install',
    //     message: 'please choose this project bable config ',
    //     choices: ['allPolyfill', 'runtime']
    // },
    {
        type: "confirm",
        message: "Is project use redux？",
        name: "redux",
    },
    // {
    //     type: "confirm",
    //     message: "Is project use router",
    //     name: "router",
    // },
    {
        type: "confirm",
        message: "Is project use ant design",
        name: "antd",
    },
    {
        type: "confirm",
        message: "Is project use ant echarts",
        name: "echarts",
    },
    // {
    //     type: "confirm",
    //     message: "Is project use ant pwa",
    //     name: "pwa",
    // }
];


let prompt = () => {
    return new Promise(resolve => {
        inquirer.prompt(promptList).then(answer => {
            resolve(answer);
        });
    });
};
module.exports = prompt;
