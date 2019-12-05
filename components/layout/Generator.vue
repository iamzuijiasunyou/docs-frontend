<template>
  <div class="layout-generator">
    <widget-generator
      v-for="(item, index) in config.children"
      :key="index"
      :config="item"
    />
  </div>
</template>

<script>
export default {
  name: 'LayoutGenerator',
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          children: []
        }
      }
    }
  }
}
</script>

<style></style>
