<script>
export default {
  name: 'WtTable',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    api: {
      type: Function,
      default: null
    },
    params: {
      type: Object,
      default: () => ({})
    },
    pollInterval: {
      type: Number,
      default: 0
    },
    autoload: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      loading: false,
      pageNum: 1,
      pageSize: 10,
      data: [],
      pagination: {
        total: 10,
        'show-total': total => `共 ${total} 条记录`,
        'show-size-changer': true,
        'show-quick-jumper': true
      }
    }
  },
  mounted () {
    if (this.autoload) {
      this.getData()
    } else if (this.tableData.length > 0) {
      this.data = this.tableData
      this.pagination.total = this.tableData.length
    }
  },
  destroyed () {
    clearTimeout(this.timer)
  },
  methods: {
    formatter (row, column, cellValue, index) {
      return cellValue === undefined || cellValue === null ? '-' : cellValue
    },
    fetch () {
      const { pageSize, pageNum } = this
      const params = {
        pageNum: pageNum,
        pageSize: pageSize,
        ...this.params
      }
      this.api(params)
        .then(data => {
          this.pagination.total = data.total
          this.data = data.rows || []
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
        .then(() => {
          clearTimeout(this.timer)
          if (this.pollInterval) {
            this.timer = setTimeout(() => this.fetch(), this.pollInterval)
          }
        })
    },
    getData () {
      if (typeof this.api === 'function' && this.api) {
        this.loading = true
        this.fetch()
      } else {
        this.data = this.tableData
        this.pagination.total = this.tableData.length
      }
    },
    handleChange (value) {
      this.pageSize = value.pageSize
      this.pageNum = value.pageNum
      this.getData()
    },
    refresh (pageNum = 1, pageSize = 10) {
      this.pageNum = pageNum
      this.pageSize = pageSize
      this.getData()
    },
    handledbClick (expandedRows) {
      this.$emit('expandedRowsChange', expandedRows)
    },
    handleSelectionChange (pagination) {
      this.refresh(pagination.current, pagination.pageSize)
      this.$emit('change', pagination)
    },
    tableExpand (...args) {
      this.$emit('expand', ...args)
    }
  },
  render (h) {
    return (
      <div class="wt-table">
        <a-table
          loading={this.loading}
          pagination={this.pagination}
          dataSource={this.data}
          columns={this.columns}
          rowKey={(record, index) => index }
          {...this.$attrs}
          expandedRowsChange={this.handledbClick}
          onChange={this.handleSelectionChange}
          onExpand={this.tableExpand}
        ></a-table>
      </div>
    )
  }
}
</script>
