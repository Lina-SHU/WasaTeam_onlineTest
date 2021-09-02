<template>
  <router-view/>
</template>

<script>
export default {
  watch: {
    $route (to) {
      /* 設定頁面 title */
      const title = to.meta.title || ''
      document.title = title
      /* 設定頁面 description */
      const des = document.querySelector('meta[name="description"]')
      des.setAttribute('content', to.meta.metaTags[0].content)
    }
  }
}
</script>

<style lang="scss">
@import './assets/all';
</style>
