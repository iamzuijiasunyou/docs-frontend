<template>
  <v-menu open-on-hover top offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" class="lang-btn" dark>
        <v-img :src="currentLangConfig.icon" class="lang-img" />
        {{ currentLangConfig.title }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, key) in langConfig"
        :key="key"
        @click="handleChangeLang(key)"
      >
        <v-list-item-icon>
          <v-img :src="item.icon" />
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { getLangFromPath } from '@/utils'
export default {
  name: 'LayoutLangMenu',
  computed: {
    ...mapState(['docLang', 'langConfig']),
    currentLangConfig() {
      return this.langConfig[this.docLang]
    }
  },
  created() {
    const docLang = getLangFromPath(location.href, this.langConfig)
    this.changeLang(docLang)
  },
  methods: {
    ...mapMutations(['changeLang']),
    ...mapActions(['changeLanguage']),
    async handleChangeLang(value) {
      if (value === this.docLang) return
      try {
        const currentLang = this.docLang
        await this.changeLanguage(value)
        this.changeRouterByLang(value, currentLang)
      } finally {
      }
    },
    // TODO route with current param
    changeRouterByLang(newLang, preLang) {
      const path = this.$route.path.replace(preLang, newLang)
      const { query } = this.$route
      this.$router.push({ path, query })
    }
  }
}
</script>

<style lang="scss" scoped>
.lang-btn {
  // background-color: transparent !important;
  text-transform: none;
}
.lang-img {
  margin-right: 35px;
}
</style>
