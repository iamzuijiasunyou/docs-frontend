<template>
  <section class="vue-component">
    <component :is="config.value"></component>
  </section>
</template>

<script>
export default {
  name: 'DocVue',
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style></style>
