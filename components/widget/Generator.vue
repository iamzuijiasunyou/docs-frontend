<template>
  <component :is="is" :config="config" v-bind="config.attrs || {}" />
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
      return `${upperFirst(this.config.type)}`
    }
  }
}
</script>

<style></style>
