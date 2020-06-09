import { axios } from '@/utils/request'
// 示例 获取用户列表
export const getManageGetUserApi = params => axios.get('/system/user/list', { params })
