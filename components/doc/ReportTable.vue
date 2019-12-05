<template>
  <div>
    {{ config.value.apiKey }}
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  created() {
    console.log('vue table')
  }
}
</script>

<style></style>
