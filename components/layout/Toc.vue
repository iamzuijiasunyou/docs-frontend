<template>
  <v-navigation-drawer
    :value="value"
    @input="(value) => $emit('input', value)"
    app
    clipped
    right
    width="200"
  >
    <v-list expand>
      <v-subheader>Contents</v-subheader>
      <v-list-item-group v-model="activeIndex" color="primary">
        <v-list-item
          v-for="(item, index) in tocConfig"
          :key="index"
          @click="scrollToAnchor(item.id, index)"
          class="toc-item"
        >
          <v-list-item-content>
            <v-list-item-title
              v-text="item.title"
              class="toc-link"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { throttle } from 'lodash-es'
export default {
  name: 'LayoutToc',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    handler: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      initiativeScrolling: false, // click contents will trigger scroll event
      tocConfig: [],
      activeIndex: 0
    }
  },
  mounted() {
    this.debounceOnScroll = throttle(this.onScroll, 20)
    window.addEventListener('scroll', this.debounceOnScroll, false)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.debounceOnScroll, false)
  },
  methods: {
    defaultHandler() {
      const markdownBody = Array.from(
        document.querySelectorAll('.markdown-body')
      )
      return markdownBody
        .map((markdownEle) => {
          const eles = Array.from(
            markdownEle.querySelectorAll('h1,h2,h3,h4,h5,h6')
          )
          return eles.map((ele) => ({
            id: ele.id,
            title: ele.innerHTML,
            ele
          }))
        })
        .flat()
    },
    updateToc() {
      const handler = this.handler || this.defaultHandler
      this.tocConfig = handler()
      this.$nextTick(() => {
        this.activeIndex = 0
        const id = encodeURI(decodeURI(this.$route.hash.slice(1)))
        const index = this.tocConfig.findIndex((toc) => toc.id === id)
        if (this.$route.hash) {
          this.activeIndex = Math.max(0, index)
          this.scrollToAnchor(id, index)
        }
      })
    },
    scrollToAnchor(id, index) {
      this.initiativeScrolling = true
      const ele = document.getElementById(id)
      if (!ele) return
      const scrollTop = ele.offsetTop - 20
      const html = document.documentElement
      html.scrollTop = scrollTop
      // hack: remove target id when set location hash
      ele.id = 'temporary_remove_anchor'
      setTimeout(() => {
        location.hash = `#${id}`
        // recovery ele id
        setTimeout(() => {
          ele.id = id
          this.initiativeScrolling = false
        }, 50)
      }, 30)
    },
    onScroll(event) {
      if (this.initiativeScrolling) return
      if (this.tocConfig.length === 0) return
      const { scrollTop } = document.documentElement
      let activeIndex = 0
      for (let index = this.tocConfig.length - 1; index >= 0; index--) {
        const toc = this.tocConfig[index]
        const { ele } = toc
        if (scrollTop >= ele.offsetTop - 20) {
          activeIndex = index
          break
        }
      }
      this.activeIndex = activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.toc-item {
  min-height: 24px;
  ::v-deep .v-list-item__content {
    padding: 5px 0;
  }
}
.toc-link {
  color: inherit;
  cursor: pointer;
}
</style>
