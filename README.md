# Readme

> a common document frontend project
> [中文文档](https://iamzuijiasunyou.github.io/docs-frontend/cn/introduction/quickStart)
> [English Document](https://iamzuijiasunyou.github.io/docs-frontend/en/introduction/quickStart)

## 技术选型
前端框架：Nuxt.js(Vue.js), Vuetifyjs<br>
构建工具：Webpack<br>
包管理器：Yarn<br>
模块加载：ES6 规范<br>
CSS 预处理：SASS<br>
浏览器兼容：Chrome (推荐), Safari (推荐), Firefox (推荐)<br>

## 环境配置
[Node](https://nodejs.org/en/download/)：推荐v10.16.3 及以上<br>

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production
$ yarn run build
```

## 目录结构
|- assets　　　　　　　样式、脚本源码、原始图片资源目录<br>
|- components　　　　 抽象、可复用 Vue 组件目录<br>
|- config　　　　　　　路由配置、语言配置、枚举配置<br>
|- doc_dir　　　　　　 文档内容配置,支持多目录配置<br>
|- layouts　　　　　　 页面框架布局分类目录<br>
|- middlewave　　　　 自定义中间件目录<br>
|- node_modules　　　 依赖包，不纳入版本控制<br>
|- pages　　　　　　　 对应路由的页面类 Vue 组件目录<br>
|- plugins　　　　　　 自定义插件配置目录<br>
|- static　　　　　　　无需构建的静态资源目录<br>
|- store　　　　　　　 Vuex 配置目录<br>
|- test　　　　　　　  测试代码目录<br>
|- utils　　　　　　　 工具函数目录<br>
|- .editorconfig　　　编辑器配置文件<br>
|- .prettierrc　　　　Prettier 配置文件<br>
|- nuxt.config.js　　 Nuxt.js 项目配置文件<br>
|- package.json　　　 项目元数据文件<br>
