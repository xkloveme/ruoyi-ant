<template>
  <div>
    <form-create ref="fc" v-bind="$attrs" v-model="fApi" :option="newOption"></form-create>
  </div>
</template>

<script>
export default {
  name: 'WtForm',
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      fApi: {},
      model: {}
    }
  },
  computed: {
    newOption () {
      const self = this
      console.log('🐛:: data -> self', self.isSearch)
      const defOption = {
        onSubmit: function (formData) {
          alert(JSON.stringify(formData), self)
          self.$emit('submit', formData)
        },
        submitBtn: {
          disabled: false,
          ghost: false,
          loading: false,
          type: 'primary',
          block: false,
          icon: self.isSearch ? 'search' : 'check',
          innerText: self.isSearch ? '搜索' : '提交',
          col: { span: self.isSearch ? 2 : 12, push: self.isSearch ? 0 : 10 },
          show: true
        },
        resetBtn: {
          disabled: false,
          ghost: false,
          icon: 'sync',
          loading: false,
          type: 'default',
          block: false,
          innerText: '重置',
          col: { span: self.isSearch ? 2 : 12 },
          show: true
        }
      }
      return { ...defOption, ...this.option }
    }
  },
  mounted: function () {}
}
</script>

<style scoped>
</style>
