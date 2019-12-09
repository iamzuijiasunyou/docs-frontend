<template>
  <v-layout>
    <div class="page-index">
      <h3>Document</h3>
      <ul class="link-list">
        <li>
          <nuxt-link to="/cn/introduction/quickStart">中文文档</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/en/introduction/quickStart"
            >English Document</nuxt-link
          >
        </li>
      </ul>
    </div>
  </v-layout>
</template>

<script>
export default {
  created() {
    console.log('index')
  }
}
</script>

<style lang="scss" scoped>
.page-index {
  padding: 20px;
  li {
    margin-top: 10px;
  }
}
</style>
