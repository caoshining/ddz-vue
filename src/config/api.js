let http='http://120.77.144.115/phz-admin'
let base = 'http://120.77.144.115/phz-admin';
import axios from 'axios';
//登录
export const auth =http+ '/auth'
//登出
export const authDelete =http+ '/authDelete'
//充值查询
export const paylooks=http+'/dealer/getCashRecordListByDate'
//下属代理
export const getSubDealer=http+'/dealer/getSubDealer'
//下属玩家
export const getSubPlayer=http+'/dealer/getSubPlayer'
//创建代理
// export const createDealer=http+'/createDealer'
//禁用代理
export const disableDealer=http+'/disableDealer'
//修改密码
export const changePwd=http+'/changePwd'
//增添用户房卡
export const addItem=http+'/player/addItem'
//玩家列表
export const getPlayerList = params => { return axios.get(`${base}/player/getPlayerList`, { params: params }).then(res => res.data); };
//下级代理列表
export const getDealerListPage = params => { return axios.get(`${base}/dealer/getDealerListPage`, { params: params }).then(res => res.data); };
//代理充值
export const addCash = params => { return axios.get(`${base}/dealer/addCash`, { params: params }).then(res => res.data); };
//新增代理
export const createDealer = params => { return axios.get(`${base}/dealer/createDealer`, { params: params }).then(res => res.data); };