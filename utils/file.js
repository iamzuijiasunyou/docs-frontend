import Path from 'path'
import { lstatSync, readdirSync } from 'fs'

export const isDirectory = ({ path }) => lstatSync(path).isDirectory()

export const getDirectories = (source) => {
  return readdirSync(source)
    .map((name) => {
      return {
        path: Path.join(source, name),
        name
      }
    })
    .filter(isDirectory)
}

export const getFiles = (path) => {
  return getDirectories(path).map((directory) => {
    return {
      directory: directory.name,
      children: readdirSync(directory.path).map((file) => {
        const split = file.split('.')
        const type = split.pop()
        const title = split.join('.')
        return {
          file,
          type,
          title,
          to: `/${directory.name}/${title}`
        }
      })
    }
  })
}
