import { cloneDeep } from 'lodash-es'

export function iteratorTree(tree, predicate) {
  const queen = [tree]
  // get child's key
  while (queen.length) {
    const curNode = queen.shift()
    predicate(curNode)
    if (curNode.children && curNode.children.length) {
      queen.push(...curNode.children)
    }
  }
}

export function mergeConfigWithLang(config, lang) {
  const cloneConfig = cloneDeep(config)
  iteratorTree(cloneConfig, (node) => {
    node.value = lang[node.lang] || undefined
  })
  return cloneConfig
}
