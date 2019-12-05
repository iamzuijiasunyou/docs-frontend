export function getLangFromPath(path, langConfig) {
  return Object.keys(langConfig).find((lang) => path.includes(lang))
}
