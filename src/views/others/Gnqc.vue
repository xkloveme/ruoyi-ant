<template>
  <div>
    <h1>优化点</h1>
    <h2>接口封装</h2>
    <Button type="primary" @click="handleClickUser">用户调用接口</Button>
    <div style="height: 100px;overflow: hidden;">{{ list }}</div>
    <div v-auth="'system:dict:add'">权限</div>
    <div v-auth="'system:dict:ad22'">无权限</div>
    <div v-if="$pm('system:dict:add')">v-if</div>
    <wt-table :columns="columns" :api="$api.getManageGetUserApi"></wt-table>
  </div>
</template>

<script>
// import columns from './table.js'
export default {
  data () {
    return {
      list: [],
      columns: [
        {
          title: '序号',
          dataIndex: 'index',
          customRender: (text, row, index) => {
            const h = this.$createElement
            return h('a', index + 1)
          }
        },
        {
          title: '用户名',
          dataIndex: 'userName'
        },
        {
          title: '备注',
          dataIndex: 'remark'
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          customRender: (text, row, index) => {
            return {
              children: this.$formatDate(text)
            }
          }
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          customRender: (text, row, index) => {
            return <a>{text}</a>
          }
        },
        {
          title: '操作',
          dataIndex: 'operation',
          width: 80,
          customRender: (text, row, index) => {
            const h = this.$createElement
            const name = {
              6: '提出异议',
              7: '提出异议',
              8: '重新提交'
            }
            const disabled = Number(row.applyFormStatus) === 7 || row.appealCount
            const BUTTON = [
              h('a-button', {
                attrs: {
                  type: 'link'
                },
                on: {
                  click: () => {
                    this.handleClickDetail(row)
                  }
                }
              }, '查看详情')
            ]
            if (name[Number(row.applyFormStatus)]) {
              BUTTON.push(h('a-button', {
                attrs: {
                  type: 'link',
                  disabled: Boolean(disabled)
                },
                on: {
                  click: () => {
                    if (Number(row.applyFormStatus) === 6) {
                      this.handleClickOpen(row)
                    } else {
                      this.handleClickReset(row)
                    }
                  }
                }
              }, name[Number(row.applyFormStatus)]))
            }
            return h('div', BUTTON)
          }
        }
      ]
    }
  },
  methods: {
    handleClickUser () {
      console.log(this.$api)
      this.$api.getManageGetUserApi().then(res => {
        this.list = res.rows
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
