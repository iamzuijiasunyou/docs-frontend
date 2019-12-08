 # Project Configuration

## Directory Structure
`doc_dir` directory has document configuration, mainly including `doc` (page content configuration, file name is route name), `lang` (page multilingual configuration), and `summary` directory (document navigation configuration).<br />
The following side directory is an example: <br />
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

## Page Routing
The project will generate the corresponding page route according to the files in the first level directory and the doc directory under the `lang` directory, such as `/cn/introduction/quickStart` and `/en/introduction/quickStart`.

## Page Content Configuration
The generated page route already exists. Now you need to configure the page content. We provide the configuration of tree structure so that you can define the content structure of your page.
quickstart.json main field: the `type` field is the component name under the /components/doc directory, and the `lang` field is the key value corresponding to the corresponding language content. Such as:
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

## Multi-lingual Content
The tree structure of the page has been configured. Now you only need to configure the content of the key value `quickstartMd` in the corresponding language directory under the lang directory.
/lang/cn/introduction/quickStar.js
```js
// By default, the project supports files in markdown and docx formats. You can also fill in other text content
import quickStartMd from './quickStart.md'
export default {
  quickStartMd
}
```
## Document navigation
Now the page has been generated based on the configuration in the `doc` and `lang` directories. We only need to provide access in the navigation for normal access. You can configure the global multilingual content configuration in the `index.js` of the `summary` directory, and then in the `locale.js` of the `lang` directory.

```js
// summary/index.js
export default {
  children: [
    {
      lang: 'introduction',
      icon: 'mdi-book-open-page-variant',// Icon, vuetify built-in Icon
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
          to: '/docx/test' // The default is to use the value of lang to generate routes. You can also customize routes
        }
      ]
    }
  ]
}

// lang/cn/locale.js
export default {
  // introduction
  introduction: 'introduction',
  quickStart: 'quickStart'
  // docx
  docx: 'Docx',
  docxIndex: 'Docx Test'
}

```

## Contents
After all of the above are configured, you can run the project by executing `yarn run dev`. Each page automatically generates page TOC navigation based on the H tag.

## Multi Project Document
For multiple projects such as `server` and `client`, you want to write both documents in one document project. For example, the route of the `server` project document is `/cn/server/xxx`,
The route of the `client` project document is `/cn/client/xxx`. At this time, you can configure the `doc_dir` field of doc.config.js (the default value is ['']) to be ['server','client'].
