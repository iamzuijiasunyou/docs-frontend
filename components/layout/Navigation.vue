<template>
  <v-navigation-drawer
    :value="value"
    @input="(value) => $emit('input', value)"
    app
    clipped
    width="265"
  >
    <v-list expand>
      <v-list-group
        v-for="(summaryItem, summaryIndex) in summaryConfig.children"
        :key="`summary-${summaryIndex}`"
        :prepend-icon="summaryItem.icon"
        value="true"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title v-text="summaryItem.value"></v-list-item-title>
        </template>
        <v-list-item
          v-for="(item, i) in summaryItem.children"
          :key="`${summaryItem.lang}-${item.lang}-${i}`"
          :to="
            `/${docLang}${docDir ? `/${docDir}` : ''}${item.to ||
              `/${summaryItem.lang}/${item.lang}`}`
          "
          router
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.value"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

    <template v-slot:append>
      <div class="drawer-footer">
        <layout-lang-menu></layout-lang-menu>
        <layout-theme-btn></layout-theme-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LayoutNavigation',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['docLang', 'summaryConfig', 'docDir'])
  }
}
</script>

<style lang="scss" scoped>
.drawer-footer {
  display: flex;
  border-top: 1px solid #ededed;
  padding: 12px;
  background-color: transparent;
  justify-content: space-between;
}
::v-deep .theme--dark .drawer-footer {
  border-top: 1px solid #7a7a7a;
}
</style>
