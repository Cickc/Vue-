import Mock from 'mockjs'
import homeApi from './mockServerData/home.js'
import userApi from '../api/mockServerData/user.js'
import permissionApi from '../api/mockServerData/permission'

Mock.mock('/home/getData', homeApi.getStatisticalData)
Mock.mock(/user\/add/, 'post', userApi.createUser)
Mock.mock(/user\/edit/, 'post', userApi.updateUser)
// 拦截用户编辑的方法
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/del/, 'post', userApi.deleteUser)
//拦截用户获得菜单的方法
Mock.mock(/permission\/getMenu/, 'post', permissionApi.getMenu)