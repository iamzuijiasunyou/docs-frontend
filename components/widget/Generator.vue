<template>
  <component :is="is" :config="config" />
</template>

<script>
import { upperFirst } from 'lodash-es'
export default {
  name: 'WidgetGenerator',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    is() {
      return `Doc${upperFirst(this.config.type)}`
    }
  }
}
</script>

<style></style>
