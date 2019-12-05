<template>
  <section v-html="config.value" class="docx-body"></section>
</template>

<script>
export default {
  name: 'DocDocx',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style></style>
