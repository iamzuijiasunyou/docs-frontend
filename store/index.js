import docConfig from '@/doc.config'
import langConfig from '@/config/lang'
import { getLangFromPath, mergeConfigWithLang } from '@/utils'

export const state = () => ({
  docLang: getLangFromPath(location.href, langConfig),
  docDir: null,
  langConfig,
  summaryConfig: {},
  localeConfig: {}
})

export const mutations = {
  changeLang(state, docLang) {
    state.docLang = docLang
  },
  setDocDir(state, docDir) {
    state.docDir = docDir
  },
  setSummaryConfig(state, summaryConfig) {
    state.summaryConfig = summaryConfig
  },
  setLocaleConfig(state, localeConfig) {
    state.localeConfig = localeConfig
  }
}

export const actions = {
  initSummary({ commit, state }) {
    const docDir = docConfig.docDir.find(
      (dir) => dir && location.href.includes(dir)
    )
    commit('setDocDir', docDir)
    const dir = docDir ? `${docDir}/` : ''
    return Promise.all([
      import(`../doc_dir/${dir}lang/${state.docLang}/locale.js`),
      import(`../doc_dir/${dir}summary/index.js`)
    ]).then(([locale, summary]) => {
      const summaryConfig = mergeConfigWithLang(summary.default, locale.default)
      commit('setSummaryConfig', summaryConfig)
      commit('setLocaleConfig', locale.default)
    })
  },
  changeLanguage({ commit, dispatch }, docLang) {
    return dispatch('initSummary').then(() => {
      commit('changeLang', docLang)
    })
  }
}
