<template>
  <v-app light>
    <v-app-bar id="v-app-bar" app clipped-left clipped-right>
      <v-app-bar-nav-icon @click="leftDrawer = !leftDrawer" />
      <v-img
        :src="require('@/assets/image/mintegral-logo.svg')"
        max-height="100%"
        max-width="200px"
      />
      <v-spacer />
      <v-btn
        class="hidden-xs-only"
        text
        link
        target="_blank"
        href="https://github.com/"
        >{{ localeConfig.custom1 }}</v-btn
      >
      <v-btn
        class="hidden-xs-only"
        text
        link
        target="_blank"
        href="https://github.com/"
        >{{ localeConfig.custom2 }}</v-btn
      >
      <v-app-bar-nav-icon @click="rigthDrawer = !rigthDrawer" />
    </v-app-bar>
    <layout-navigation v-model="leftDrawer"></layout-navigation>
    <layout-toc ref="layoutToc" v-model="rigthDrawer"></layout-toc>
    <v-content>
      <v-container>
        <nuxt @document-loaded="onDocumentLoaded" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import { isMobile } from '@/utils'
export default {
  data() {
    const mobile = isMobile()
    return {
      leftDrawer: !mobile,
      rigthDrawer: !mobile
    }
  },
  computed: {
    ...mapState(['localeConfig'])
  },
  created() {},
  methods: {
    onDocumentLoaded() {
      this.$refs.layoutToc.updateToc()
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-list {
  padding: 0 10px;
}
</style>
