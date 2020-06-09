// ie polyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'
import api from './server'
// mock
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import 'ant-design-vue/dist/antd.less'
import i18n from './locales'
import './components/global.less'
import { Dialog } from '@/components'
import WtUI from './packages'
import formCreate, { maker } from '@form-create/ant-design-vue'
// auto load api
Vue.prototype.$api = api
Vue.prototype.$maker = maker
Vue.config.productionTip = false
// mount axios Vue.$http and this.$http
Vue.use(VueAxios)
Vue.use(Dialog)
Vue.use(WtUI)
Vue.use(formCreate)

new Vue({
  router,
  store,
  i18n,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
