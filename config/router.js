import Path from 'path'
import docConfig from '../doc.config'
import { getFiles, getDirectories } from '../utils/file'
const appRoot = process.cwd()
// TODO elegant realization
const documentComponent = Path.resolve(appRoot, 'pages', 'document.vue')

const getDocRouter = () => {
  const docRoutes = []
  docConfig.docDir.forEach((dir) => {
    // lang config
    const langPath = Path.resolve(appRoot, 'doc_dir', dir, 'lang')
    const langs = getDirectories(langPath)

    // doc config
    const docPath = Path.resolve(appRoot, 'doc_dir', dir, 'doc')
    const directorys = getFiles(docPath)

    langs.forEach((lang) => {
      directorys.forEach((directory) => {
        directory.children.forEach((doc) => {
          const path = Path.resolve(
            appRoot,
            'doc_dir',
            dir,
            'doc',
            directory.directory,
            doc.file
          )
          const name = ['/', lang.name, dir, directory.directory, doc.title]
            .join('/')
            .replace(/\/{2,}/g, '/')
          docRoutes.push({
            name,
            path: name,
            component: documentComponent,
            props: {
              config: require(path)
            }
          })
        })
      })
    })
  })
  return docRoutes
}

export default getDocRouter()
