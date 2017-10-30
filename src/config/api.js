let http='http://120.77.144.115/phz-admin'
let base = 'http://120.77.144.115/phz-admin';
import axios from 'axios';
//登录
export const auth =http+ '/auth'
//登出
export const authDelete =http+ '/authDelete'

export const requestLogin = (params) => { return axios.get(`${base}/auth`, { params: params }).then(res => res.data); };
export const requestLogout = () => { return axios.get(`${base}/authDelete`, {params : ""}).then(res => res.data); };

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
// export const addItem=http+'/player/addItem'
//玩家列表
//下级代理列表
//代理充值
export const addCash = params => { return axios.get(`${base}/dealer/addCash`, { params: params }).then(res => res.data); };
//新增代理

// -- new 
export const addItem = params => { return axios.get(`${base}/player/addItem`, { params: params }).then(res => res.data); };
export const getPlayer = params => { return axios.get(`${base}/player/getPlayer`, { params: params }).then(res => res.data); };
// export const updatePlayer = params => { return axios.get(`${base}/player/updatePlayer`, { params: params }).then(res => res.data); };
export const kickPlayer = params => { return axios.get(`${base}/player/kickPlayer`, { params: params }).then(res => res.data); };
//玩家列表
export const getPlayerList = params => { return axios.get(`${base}/player/getPlayerList`, { params: params }).then(res => res.data); };
//取配置列表
export const getConfigList = params => { return axios.get(`${base}/config/getConfigList`, { params: params }).then(res => res.data); };
//save delect
export const DeleteConfig = params => { return axios.get(`${base}/config/delete`, { params: params }).then(res => res.data); };
//新建和保存 
export const saveConfig = params =>{
    return axios({
        url: `${base}/config/save`,
        method: 'post',
        data : params
    }).then(res => res.data);};

export const getRechargeRecordListPage = params => { return axios.get(`${base}/player/getRechargeRecordListPage`, { params: params }).then(res => res.data); };

export const getRechargeRecordListPageByPlayer = params => { return axios.get(`${base}/player/getRechargeRecordListPageByPlayer`, { params: params }).then(res => res.data); };


export const getConfig = params => { return axios.get(`${base}/config/getConfig`, { params: params }).then(res => res.data); };

export const updateConfig = params => { return axios.get(`${base}/config/updateConfig`, { params: params }).then(res => res.data); };

export const getDealerListPage = params => { return axios.get(`${base}/dealer/getDealerListPage`, { params: params }).then(res => res.data); };

export const createDealer = params => { return axios.get(`${base}/dealer/createDealer`, { params: params }).then(res => res.data); };

// export const disableDealer = params => { return axios.get(`${base}/dealer/disableDealer`, { params: params }).then(res => res.data); };

export const updateDealer = params => { return axios.get(`${base}/dealer/updateDealer`, { params: params }).then(res => res.data); };

// export const changePwd = params => { return axios.get(`${base}/dealer/changePwd`, { params: params }).then(res => res.data); };

export const getCashRecordList = params => { return axios.get(`${base}/dealer/getCashRecordList`, { params: params }).then(res => res.data); };

export const getTopDealer = params => { return axios.get(`${base}/dealer/getTopDealer`, { params: params }).then(res => res.data); };


export const getGoodsList = params => { return axios.get(`${base}/goods/getGoodsList`, { params: params }).then(res => res.data); };

export const addGoods = params => { return axios.get(`${base}/goods/addGoods`, { params: params }).then(res => res.data); };

export const delGoods = params => { return axios.get(`${base}/goods/delGoods`, { params: params }).then(res => res.data); };

export const updateGoods = params => { return axios.get(`${base}/goods/updateGoods`, { params: params }).then(res => res.data); };

export const getExchangeList = params => { return axios.get(`${base}/exchange/getExchangeList`, { params: params }).then(res => res.data); };

export const updateExchange = params => { return axios.get(`${base}/exchange/updateExchange`, { params: params }).then(res => res.data); };

export const fileUpload = params => { return axios.post(`${base}/file/upload`, { params: params }).then(res => res.data); };
//玩家管理
// export const updatePlayer = params => { return axios.post(`${base}/player/updatePlayer`,{},{ data: params, 'headers': {'Content-Type': 'application/raw;charset=UTF-8'}, }).then(res => res.data); };

// export const updatePlayer = params => { return axios({
// 											  method: 'post',
// 											  url: `${base}/player/updatePlayer`,
// 											  data: params,
// 											  // responseType: 'json',
// 											  // headers: {'X-Requested-With': 'XMLHttpRequest'},
//               								// requestHeader:{'Content-Type':'application/json'},
// 											}).then(res => res.data)};
export const updatePlayer = params =>{
    return axios({
        url: `${base}/player/updatePlayer`,
        method: 'post',
        data : params
    }).then(res => res.data);};