import { checkPermission } from '@/utils/permissions'
// 删除节点dom
const remove = el => el.parentNode.removeChild(el)
const vAuth = {
  inserted (el, { value }) {
    if (!checkPermission(value)) {
      remove(el)
    }
  }
}
export default vAuth
