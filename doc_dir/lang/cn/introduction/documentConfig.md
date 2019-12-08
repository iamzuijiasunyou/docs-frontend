# 项目配置

## 目录结构
`doc_dir`目录存在着文档配置，主要包含 `doc`（页面内容配置，文件名即为路由名）、`lang`（页面的多语言配置）、`summary` 目录（文档导航配置）。  
以下边目录为例子：<br />
```markdown
|-- doc_dir  
 |-- doc  
  |-- introduction  
   |-- quickStart.json
|-- lang  
 |-- cn  
  |-- introduction  
   |-- quickStart.js  
   |-- quickStart.md
  |-- locale.js  
 |-- en  
  |-- introduction  
   |-- quickStart.js  
   |-- quickStart.md
  |-- locale.js  
|-- summary  
 |-- index.js
```

## 页面路由

项目会根据 `lang` 目录下的一级目录和 `doc` 目录下的文件生成相应的页面路由，如 `/cn/introduction/quickStart` 和 `/en/introduction/quickStart`。

## 页面内容配置

生成的页面路由已经有了，现在要配置页面内容了。我们提供了树形结构的配置，让你可以定义你的页面内容结构。  
quickStart.json主要字段：`type` 字段为/components/doc 目录下的组件名，`lang` 字段则是相应语言内容对应的 key 值。如：

```json
{
  "children": [
    {
      "type": "section",
      "children": [
        {
          "type": "markdown",
          "lang": "quickStartMd"
        }
      ]
    }
  ]
}
```

## 多语言内容

页面的树形结构配置已经有了，现在只需要在 `lang` 目录下相应的语言目录配置对应 key 值 quickStartMd 的内容了。
/lang/cn/introduction/quickStar.js

```js
// 项目默认支持markdown和docx格式的文件，你也可以填写其他文本内容
import quickStartMd from './quickStart.md'
export default {
  quickStartMd
}
```

## 文档导航

现在页面已经基于 `doc` 和 `lang` 目录下的配置生成了。我们只需要在导航里提供入口就可以进行正常访问了。你可以在 `summary` 目录的 `index.js` 配置, 然后在 `lang` 目录的 `locale.js` 配置全局的多语言内容配置。

```js
// summary/index.js
export default {
  children: [
    {
      lang: 'introduction',
      icon: 'mdi-book-open-page-variant',// 图标，vuetify内置icon
      children: [
        {
          lang: 'quickStart'
        },
        {
          lang: 'register'
        }
      ]
    },
    {
      lang: 'docx',
      icon: 'mdi-file-chart',
      children: [
        {
          lang: 'docxIndex',
          to: '/docx/test' // 默认是使用lang的值生成路由，你也可以自定义路由
        }
      ]
    }
  ]
}

// lang/cn/locale.js
export default {
  // introduction
  introduction: '介绍',
  quickStart: '快速开始'
  // docx
  docx: 'Docx',
  docxIndex: 'Docx Test'
}

```

## contents
配置完以上所有东西，你就可以执行`yarn run dev`把项目跑起来。每个页面都会自动根据h标签生成页面toc导航。

## 多项目文档
针对多个项目如`server`、`client`，想把两个文档都写在一个文档项目里。如`server`项目文档的路由为`/cn/server/xxx`,
`client`项目文档的路由为`/cn/client/xxx`。这个时候可以配置doc.config.js的docDir字段（默认值为['']），配置成['server','client']。
