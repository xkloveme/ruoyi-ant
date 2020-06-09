<template>
  <div>
    表单封装演示
    1. 普通表单
    <wt-form :rule="rule" @submit="submit"></wt-form>2. 搜索组件
    <wt-search :rule="rule1" @submit="submit" :isSearch="true"></wt-search>3. 追加组件
    <a-button type="primary" icon="add" @click="addHandle">新增组件</a-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      i: 1,
      rule: [this.$maker.input('goods_name', 'goods_name'), this.$maker.date('create_at', 'created_at')],
      rule1: [
        {
          type: 'input',
          title: '商品名称',
          field: 'goods_name',
          value: '',
          props: {
            type: 'text'
          }
        },
        {
          type: 'select',
          field: 'cate_id',
          title: '产品分类',
          value: ['104', '105'],
          options: [
            { value: '104', label: '生态蔬菜', disabled: false },
            { value: '105', label: '新鲜水果', disabled: false }
          ],
          props: {
            multiple: true
          }
        }
      ]
    }
  },
  methods: {
    submit (data) {
      console.log('🐛:: submit -> data', data)
    },
    addHandle () {
      console.log('🐛:: addHandle -> addHandle', this.$formCreate)
      this.rule.push(this.$maker.input(`追加组件${this.i}`, `key${this.i++}`))
    }
  }
}
</script>

<style scoped>
</style>
