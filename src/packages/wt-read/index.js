import Vue from 'vue'
import ConfirmConfig from './wt-read.vue'
let currentMsg = null
let instance = null

const ConfirmConstructor = Vue.extend(ConfirmConfig)

function WtRead(
  option = {
    title: '承诺函',
    message: `
  <p>我公司已知晓：</p>
  <p>
  我公司已知晓： 如果提供不实信息，将影响享受 政府政策，记⼊失信记录，承担
  相应法律责任。
  </p>
`
  }
) {
  instance = new ConfirmConstructor({
    el: document.createElement('div')
  })
  if (typeof option === 'string') {
    instance.message = option
  } else {
    instance.title = option.title
    instance.message = option.message
    instance.showConfirmButton = !!option.showConfirmButton
    instance.showCancelBtn = !!option.showCancelBtn
    instance.confirmBtnText = option.confirmBtnText || '签 署（5s）'
    instance.cancelBtnText = option.cancelBtnText || '取消'
  }

  instance.$watch('display', function(val) {
    // 再次关闭时移除组件
    if (!val) {
      instance.$destroy(true)
      instance.$el.parentNode.removeChild(instance.$el)
      instance = null
      currentMsg = null
    }
  })
  instance.callBack = defaultCallBack
  document.body.appendChild(instance.$el)
  instance.display = true
  Vue.nextTick(() => {
    instance.visible = true
  })
  return new Promise((resolve, reject) => {
    currentMsg = {
      resolve,
      reject
    }
  })
}

function defaultCallBack(action) {
  instance.visible = false
  if (action === 'confirm') {
    currentMsg.resolve('confirm')
  } else {
    currentMsg.reject('cancel')
  }
}

export default WtRead
