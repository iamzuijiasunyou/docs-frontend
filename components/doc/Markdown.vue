<template>
  <section class="markdown-body">
    <component :is="config.value"></component>
  </section>
</template>

<script>
export default {
  name: 'DocMarkdown',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style></style>
