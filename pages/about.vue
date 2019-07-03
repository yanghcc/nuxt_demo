<template>
  <div class="container">
    about
    {{msg}}
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: 'msg'
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
