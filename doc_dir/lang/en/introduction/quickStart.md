# Getting Started

## Project Introduction

A configured front-end document project. For the uniform document page, it provides a way to configure the document content, so that you can easily complete the front-end documents. At the same time, it also supports customization, so that you can easily control the project.

## Technology Selection

Front end framework: [nuxt. JS](https://nuxtjs.org/) + [vuetify. JS](https://vuetifyjs.com/en/getting-started/quick-start/) <br />
Build tool: webpack <br />
Package manager: yarn <br />
Module loading: ES6 specification <br />
CSS preprocessing: sass <br />
Browser compatibility: Chrome (recommended), Safari (recommended), Firefox (recommended) <br />

## Environment Configuration

[Node](https://nodejs.org/en/download/): recommend v10.16.3 and above<br>

## Build Command

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev 

# build for production
$ yarn run build
```

## Directory Structure

|- assets 　　　　　　　Style, script source code, original image resource directory<br>
|- components 　　　　  Abstract and reusable Vue component directory<br>
|- config 　　　　　　　Route configuration, language configuration, enumeration configuration<br>
|- doc_dir 　　　　　　 Document content configuration supports multi directory configuration<br>
|- layouts 　　　　　　 Page frame layout category<br>
|- middlewave 　　　　  User defined middleware directory<br>
|- node_modules 　　　  Modules depend on packages and are not included in version control<br>
|- pages 　　　　　　　 Component directory of page class corresponding to routes<br>
|- plugins 　　　　　　 User defined plugin configuration directory<br>
|- static 　　　　　　　A static resource directory that does not need to be built <br>
|- store 　　　　　　　 Vuex configuration directory<br>
|- test 　　　　　　　  Test code directory<br>
|- utils 　　　　　　　 Utils tool function directory<br>
|- .editorconfig 　　　Editor configuration file<br>
|- .prettierrc 　　　　Prettier configuration file<br>
|- nuxt.config.js 　　 Nuxt.js project configuration file<br>
|- package.json 　　　 Project metadata file<br>
