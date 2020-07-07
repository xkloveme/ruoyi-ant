<template>
  <div>
    sdsdadsa
  </div>
</template>

<script>

export default {
  name: 'Workplace',
  data () {
    return {
      avatar: ''
    }
  },
  created () {
    this.avatar = ''
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
@import './Workplace.less';
.changList {
  margin-top: -14px;
}
.members {
  a {
    display: block;
    margin: 12px 0;
    line-height: 24px;
    height: 24px;
    .member {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 24px;
      max-width: 100px;
      vertical-align: top;
      margin-left: 12px;
      transition: all 0.3s;
      display: inline-block;
    }
    &:hover {
      span {
        color: #1890ff;
      }
    }
  }
}
</style>
