export default {
  // router base
  routerBase: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/docs-frontend/' : '/',
  /**
   * doc config directory
   * default is ''
   * you can custom multi doc dir,such as ['/adx', 'dsp']
   * all directory must contain doc & lang & summary
   */
  docDir: ['']
}
