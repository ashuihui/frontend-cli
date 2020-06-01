## 简介
react 前端脚手架

frontend cli

include:react、typescript、redux、router、sass/less、antd、echarts、babel、ESLint、storybook、jest&enzyme

## 使用

base:node、git

```bash
# 安装 cli
npm i frontend-cli-shui -g

# 初始化工程
fe-cli init <name>

```

## 配置项：建设中

- Webpack
- React：默认
- TypeScript：默认
- router: 默认
- redux: 可选
- css-module: 默认
- sass/less: 可选
- react ant design:可选
- echarts:可选 
- 适配方案选择：vw or rem
- babel:按需加载
- ESLint：默认
- Prettier：默认
- mock: 默认
- storybook:默认
- jest && enzyme：默认 
- maniest: 默认 todo
- pwa:可选 todo
- 代码分析：默认
- 持续集成:travis todo
- 持续发布:webhook todo
- docker: todo

## 模板
- spa
- mspa:todo
## 目录设计

- cdn:打包文件
- scripts:webpack 配置文件
    - base
    - local
    - mock
    - beta
    - prod
    - analyzer
- mock: 存放模拟数据
- src: 项目源码
- test: 存放测试代码
- doc:
  - storybook
  - prd
  - erd
- .babelc: bable 配置文件
- .editorconfig: 编辑器编码规范文件
- .eslintignore: eslint 编码检查忽略配置文件
- .eslintrc: eslint 规则配置文件
- .gitignore: git 忽略跟踪配置文件
- .postssrc: postcss 配置文件
- .prettierrc :prettier配置
- .jest.config.js: 测试配置文件
- .cybmock.config.js:塞伯坦前端数据模拟服务配置
- .cybmock.server.config.js:塞伯坦前端数据模拟服务端口