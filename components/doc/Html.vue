<template>
  <section v-html="config.value" class="html-body"></section>
</template>

<script>
export default {
  name: 'DocHtml',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style></style>
