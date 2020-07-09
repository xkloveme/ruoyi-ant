export default props => [
  {
    title: '序号',
    dataIndex: 'index',
    customRender: (text, row, index) => {
      const h = props.$createElement
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
        children: props.$formatDate(text)
      }
    }
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    customRender: (text, row, index) => {
      const h = props.$createElement
      return h('a', text)
    }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 80,
    customRender: (text, row, index) => {
      const h = props.$createElement
      const name = {
        6: '提出异议',
        7: '提出异议',
        8: '重新提交'
      }
      const disabled = Number(row.applyFormStatus) === 7 || row.appealCount
      const BUTTON = [
        h(
          'a-button',
          {
            attrs: {
              type: 'link'
            },
            on: {
              click: () => {
                props.handleClickDetail(row)
              }
            }
          },
          '查看详情'
        )
      ]
      if (name[Number(row.applyFormStatus)]) {
        BUTTON.push(
          h(
            'a-button',
            {
              attrs: {
                type: 'link',
                disabled: Boolean(disabled)
              },
              on: {
                click: () => {
                  if (Number(row.applyFormStatus) === 6) {
                    props.handleClickOpen(row)
                  } else {
                    props.handleClickReset(row)
                  }
                }
              }
            },
            name[Number(row.applyFormStatus)]
          )
        )
      }
      return h('div', BUTTON)
    }
  }
]
