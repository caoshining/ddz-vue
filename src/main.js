import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import login from './comments/login/login.vue'
import center from './comments/centaction/index.vue'
import paylook from './comments/paylook/index.vue'
import allwj from './comments/allwj/index.vue'
import daili from './comments/alldaili/index.vue'
import shouquan from './comments/shouquan/index.vue'
import changepswd from './comments/changepswd/index.vue'
import playerpay from './comments/playerPay/index.vue'
import dealerMange from './comments/dealerMange/dealerMange.vue'
import createdealer from './comments/createDealer/createDealer.vue'
import VueRouter from 'vue-router'
// import VueResourec from 'vue-resource';
import {authDelete,auth,paylooks,getSubDealer,getSubPlayer,createDealer,disableDealer,changePwd,addItem} from './config/api.js'
import { Swipe, SwipeItem, Indicator, Button, Cell, Checklist } from 'mint-ui';

import axios from 'axios'
// import VueAxios from 'vue-axios'


Vue.use(ElementUI)
Vue.use(VueRouter);
// Vue.use(VueAxios,axios);

Vue.prototype.$api = {authDelete,auth,paylooks,getSubDealer,getSubPlayer,createDealer,disableDealer,changePwd,addItem}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;

let Apps = Vue.extend(App);
const router =new VueRouter({
	linkActiveClass:'active',
	routes:[
		{path: '/', component: login},
    	{path: '/login', component: login},
    	{path: '/center', component: center},
    	{path: '/allwj', component: allwj},
    	{path: '/daili', component: daili},
    	{path: '/shouquan', component: shouquan},
      {path: '/changepswd', component: changepswd},
    	{path: '/playerpay', component: playerpay},
      {path: '/paylook', component: paylook},
      {path: '/createDealer', component: createdealer},
    	{path: '/dealerMange', component: dealerMange}

	]
})
axios.interceptors.request.use(
    config => {
        try{
          if (config.url.indexOf('phz-admin/auth')==-1) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        //  if(sessionStorage.user){
            //不为登录接口时接口请求带上token
            config.headers.token =JSON.parse(sessionStorage.user).token||'';
            config.params.token=JSON.parse(sessionStorage.user).token||''; // bug，因为服务端取不到header，临时方案
        }
        }catch(e){  
          console.log(e)
        }
        return config;
    },
    err => {
        return Promise.reject(err);
});

new Vue({
  router,
  render: h => h(Apps)
}).$mount('#app');
