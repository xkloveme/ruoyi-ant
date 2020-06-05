<h1 align="center">RuoYi Ant</h1>

文档：http://doc.rycloud.zmrit.com

- 预览: http://ruoyi.ant.zmrit.com
- v3 测试版: http://v3.ant.zmrit.com

## 项目下载和运行

- 安装依赖

```
yarn install
```

- 开发模式运行

```
yarn run serve
```

- 编译项目

```
yarn run build
```

- Lints and fixes files

```
yarn run lint
```

## 优化

### 1. 接口请求自动封装挂载到`vue`实例上

- 调用方式

```bash
// 获取用户列表
 this.$api.getUserList().then(res => {
        console.log('🐛:: handleClickUser -> res', res)
      })
```

- 接口书写命名格式

1. 为避免命名冲突导致请求错误,采用一下命名

```bash
/*
 * Api命名建议:
  * 组成: {请求方法}{文件名}{接口用处}{Api}
  * 1.请求方法(get查询, post增加, put修改, delete删除, upload上传)
  * 2.当前js所在文件名称如gen, login
  * 3.接口用处, 如userList, deviceDetail
  * 4.Api, 表明是Api接口, 区别于其他方法
  * 目的: 语义化明确, 看到接口就知道类型用处
  * 示例: getManageUserListApi(获取用户列表api), putLoginMsCaptchaApi(获取验证码api)
 */
```

2. 接口命名一律采用小驼峰命名法
