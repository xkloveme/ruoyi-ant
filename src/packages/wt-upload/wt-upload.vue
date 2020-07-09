<script>
export default {
  name: 'wt-upload',
  props: {
    api: {
      type: Function
    },
    message: {
      default: '请上传身份证照片,大小5M以内'
    },
    type: {
      type: String,
      default: 'image/jpeg,image/png,application/pdf'
    }
  },
  data() {
    return {
      loading: false,
      file: null,
      fileList: []
    }
  },
  methods: {
    beforeUpload(file, fileList) {
      if (!file.type || this.type.indexOf(file.type) === -1) {
        this.$message.error(`文件类型仅支持${this.type}`)
        return false
      }
      if (file.size / 1024 / 1024 > 5) {
        this.$message.error('文件大小不能超过 5MB!')
        return false
      } else {
        this.file = file
        this.fileList = fileList
        this.handleUpload()
      }
    },
    handleUpload() {
      let params = {
        policyCode: this.$policyNo,
        fileName: this.file.name,
        fileType: this.file.type
      }
      this.$api.getUploadFilePathApi(params).then(res => {
        this.file.status = 'done'
        let file = {
          attachName: this.file.name,
          attachPath: res.data
        }
        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/octet-stream')
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: this.file,
          redirect: 'follow'
        }

        fetch(res.data, requestOptions)
          .then(response => response.text())
          .then(result => {
            this.$message.success('上传成功！')
            this.$emit('file', file)
          })
          .catch(() => {
            this.$message.error('上传失败.')
          })
      })
    },
    remove() {
      this.file = ''
      this.fileList = []
      this.$emit('file', null)
    }
  },
  render(h) {
    return (
      <div class="wt-upload">
        <a-upload
          multiple={false}
          change={this.change}
          fileList={this.fileList}
          beforeUpload={this.beforeUpload}
          remove={this.remove}
          name="file"
          {...this.$attrs}
        >
          <a-button
            block
            style="color:#0c3ec2;border:1px solid #0c3ec2;background-color: rgb(12, 62, 194,0.1);"
          >
            <a-icon type="upload" /> {this.message}
          </a-button>
        </a-upload>
      </div>
    )
  }
}
</script>
<style lang="less" scoped>
.wt-upload {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
