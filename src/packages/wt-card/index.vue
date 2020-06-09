<template>
  <div class="wt-card">
    <h4 class="card-title" v-if="showTitle">{{ title }}</h4>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WtCard',
  props: {
    title: {
      default: '兑现信息'
    },
    showTitle: {
      default: true
    }
  }
}
</script>
<style scoped lang="less">
@import './../../styles/theme/variables.less';
.wt-card {
  margin: 20px 0px;
  background-color: #ffffff;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);
  .card-title {
    padding-top: 10px;
  }
  .card-title::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-right: 10px;
    background-color: @primary-color;
  }
  .card-content {
    padding: 10px 15px;
  }
}
</style>
