import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import login from './comments/login/login.vue'
import center from './comments/centaction/index.vue'
import paylook from './comments/paylook/index.vue'
import allwj from './comments/allwj/index.vue'
import daili from './comments/alldaili/index.vue'
import shouquan from './comments/shouquan/index.vue'
import changepswd from './comments/changepswd/index.vue'
import VueRouter from 'vue-router'
// import VueResourec from 'vue-resource';
import {authDelete,auth} from './config/api.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI)
Vue.use(VueRouter);
Vue.use(VueAxios, axios)

Vue.prototype.$api = {authDelete,auth}

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
    	{path: '/paylook', component: paylook}
	]
})

new Vue({
  router,
  render: h => h(Apps)
}).$mount('#app');
