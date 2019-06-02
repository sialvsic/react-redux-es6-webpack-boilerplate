# What is this?
这是一个前端React项目的模板
> This project is aim to always using the all the latest configuration to run the `Todolist` app.

branch: master

Config for:
- Webpack
  - dev/prod
  - dev-server
- Babel
- eslint

branch: react-only
Config only for supporting run react

## Feature

## main lib 
- React.js
- Redux
- Webpack
- Babel
- Enzyme

## how to start
git clone
```bash
git clone git@github.com:sialvsic/react-project-boilerplate-project.git new-folder-name
```

git config

```
rm -rf .git
git init
git config user.name "sialvsic"
git config user.email "sialvsic@outlook.com"
```

first
```
$ npm install
```

and then

```
$ npm start
```

before you commit
```
$ npm test
```

## version
2019.05.05
- get rid of the Deprecated react-router-redux, use connected-react-router instead
- update package react, react-dom, react-router, redux

2018.09.09 upgrade the project package to all latest version
- React.js from V15 to V16
- Babel from V6 to V7
- Webpack from V1 to V4
- Eslint from V3 to V5
- Enzyme from V2 to V3
- Using npm to replace yarn

2018.10.20
- 添加Webpack Prod的js hash配置
- 限定Node版本到10.*
- Add favicon.ico

2018.10.23
- 添加git配置
- 修复eslint扫描文件
