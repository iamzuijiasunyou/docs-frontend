<template>
  <v-btn @click="changeTheme" icon text>
    <v-icon>{{ brightnessIcon }}</v-icon>
  </v-btn>
</template>

<script>
import { ThemeConfig, StorageKey } from '@/config/enum'
export default {
  name: 'LayoutThemeBtn',
  data() {
    return {
      theme: localStorage.getItem(StorageKey.theme) || ThemeConfig.light
    }
  },
  computed: {
    brightnessIcon() {
      return this.theme === ThemeConfig.light
        ? 'mdi-brightness-7'
        : 'mdi-brightness-4'
    }
  },
  created() {
    this.setTheme(this.theme)
  },
  methods: {
    setTheme(theme) {
      this.theme = theme
      this.$vuetify.theme.dark = this.theme === ThemeConfig.dark
    },
    changeTheme() {
      if (this.theme === ThemeConfig.light) {
        this.setTheme(ThemeConfig.dark)
      } else {
        this.setTheme(ThemeConfig.light)
      }
      localStorage.setItem(StorageKey.theme, this.theme)
    }
  }
}
</script>

<style></style>
