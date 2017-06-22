let http='http://www.ccyier.com/phz-admin'
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
export const createDealer=http+'/createDealer'
//禁用代理
export const disableDealer=http+'/disableDealer'
//修改密码
export const changePwd=http+'/changePwd'
//增添用户房卡
export const addItem=http+'/player/addItem'