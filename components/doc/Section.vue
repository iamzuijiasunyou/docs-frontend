<template>
  <section>
    <widget-generator
      v-for="(item, index) in config.children"
      :key="index"
      :config="item"
    />
  </section>
</template>

<script>
export default {
  name: 'DocSection',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style></style>
