import Mock from 'mockjs'
import homeApi from './mockServerData/home'
import userApi from '../api/mockServerData/user.js'

Mock.mock('/home/getData', homeApi.getStatisticalData)
Mock.mock(/user\/add/, 'post', userApi.createUser)
Mock.mock(/user\/edit/, 'post', userApi.updateUser)
// 拦截用户编辑的方法
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/del/, 'post', userApi.deleteUser)