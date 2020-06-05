<template>
  <div>
    <h1>优化点</h1>
    <h2>接口封装</h2>
    <Button type="primary" @click="handleClickUser">用户调用接口</Button>
    {{ list }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    handleClickUser () {
      console.log(this.$api)
      this.$api.getUserList().then(res => {
        console.log('🐛:: handleClickUser -> res', res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
