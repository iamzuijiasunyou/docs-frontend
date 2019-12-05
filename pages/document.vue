<template>
  <div class="page-document">
    <layout-generator
      v-if="documentConfig"
      :config="documentConfig"
    ></layout-generator>
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      transition="fade-transition"
      type="article"
    ></v-skeleton-loader>
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      transition="fade-transition"
      type="article"
    ></v-skeleton-loader>
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      transition="fade-transition"
      type="article"
    ></v-skeleton-loader>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mergeConfigWithLang } from '@/utils'
export default {
  layout: 'document',
  name: 'PageDocument',
  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      documentConfig: undefined,
      loading: false
    }
  },
  computed: {
    ...mapState(['docDir'])
  },
  async created() {
    this.loading = true
    try {
      await this.initSummary()
      const docDir = this.docDir ? `${this.docDir}/` : ''
      let path = this.$route.path.slice(1)
      // get true path when docDir exist
      if (this.docDir) {
        path = path.replace(`/${this.docDir}`, '')
      }
      await import(`@/doc_dir/${docDir}lang/${path}.js`).then((lang) => {
        this.documentConfig = mergeConfigWithLang(this.config, lang.default)
      })
    } catch {}
    this.loading = false
    // hack ,emit Nuxt component
    this.updateMarkdownTable()
    this.$parent.$emit('document-loaded', true)
  },
  methods: {
    ...mapActions(['initSummary']),
    updateMarkdownTable() {
      const markdownBody = Array.from(
        document.querySelectorAll('.markdown-body')
      )
      markdownBody.forEach((markdown) => {
        const tables = Array.from(markdown.querySelectorAll('table'))

        tables.forEach((table) => {
          const parent = table.parentNode
          const wrapper = document.createElement('div')
          wrapper.className = 'table-wrapper'
          parent.insertBefore(wrapper, table)
          wrapper.appendChild(table)
        })
      })
    }
  }
}
</script>

<style></style>
