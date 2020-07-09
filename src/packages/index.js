import WtTable from './wt-table'
// import WtRead from './wt-read'
// import WtUpload from './wt-upload'
// import WtHeader from './wt-header'
// import WtCard from './wt-card'
import WtForm from './wt-form/index.vue'
import WtSearch from './wt-search/index.vue'
import { directives } from './directive/index.js'
import { checkPermission } from '@/utils/permissions'
import dayjs from 'dayjs'
const formatDate = (value, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (value) {
    return dayjs(value).format(format)
  } else {
    return '-'
  }
}
const components = [WtTable, WtForm, WtSearch]
const install = Vue => {
  // 遍历注册组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  // 遍历注册自定义指令
  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key])
  })

  Vue.prototype.$formatDate = (value, format) => formatDate(value, format)
  Vue.prototype.$pm = checkPermission

  Vue.filter('datetime', value =>
    value ? formatDate(value, 'YYYY-MM-DD HH:mm:ss') : '-'
  )
  Vue.filter('date', value => value ? formatDate(value, 'YYYY-MM-DD') : '-')
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default { install, ...components }
