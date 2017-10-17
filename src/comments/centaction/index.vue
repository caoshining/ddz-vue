<template>
	<div class="center_cent">
		<mt-header title="【首页】 " class="bar-nav">
			<router-link to="/" slot="left" >
			    <mt-button icon="back">返回</mt-button>
			</router-link>
		  <mt-button slot="right" size="small"  @click="authDelete"> 
				退出
		  </mt-button>
		</mt-header>
		<div class="center_action">
			<!-- <div class="buttons-tab">
				<a href="javascript:;" class="tab-link button" v-bind:class="{ 'active': isActive }" @click="choseNav('tab-container1')">菜单</a>
				<a href="javascript:;" class="tab-link button" v-bind:class="{ 'active': !isActive }"  @click="choseNav('tab-container2')">公告</a> 
			</div> -->
			<!-- <mt-navbar v-model="active">
			  <mt-tab-item id="tab-container1" >菜单</mt-tab-item>
			  <mt-tab-item id="tab-container2">公告</mt-tab-item>
			</mt-navbar> -->
			<mt-tab-container v-model="active" swipeable="swipeable">
			  <mt-tab-container-item id="tab-container1">
				<div class="hearder_2">
					<ul>
						<li>
							账号：<span>{{uid}}</span>
						</li>
						<li>
							代理充值：<span style="color: Red;font-weight: bold; ">{{balance}}</span>元
						</li>

					</ul>
				</div>
				<div class="cent_action">
					<ul>
						<router-link class="router_li" to="/playerPay" tag="li">玩家充值 <i class="el-icon-arrow-right"></i></router-link>
						<router-link class="router_li" to="/dealerMange" tag="li">代理充值 <i class="el-icon-arrow-right"></i></router-link>
						<router-link to="/allwj" tag="li">直接玩家 <!-- {{subPlayer}} 人 --> <i class="el-icon-arrow-right"></i></router-link>
						<router-link to="/daili" tag="li">下级代理 <!-- {{subDealer}} 人 --> <i class="el-icon-arrow-right"></i></router-link>
            <router-link to="/paylook" tag="li">玩家充值查询  <i class="el-icon-arrow-right"></i></router-link>
						<li>代理充值查询 <i class="el-icon-arrow-right"></i></li>
            <router-link to="/shouquan" tag="li">授权下级代理 <i class="el-icon-arrow-right"></i></router-link>
						<router-link to="/createDealer" tag="li">新增代理 <i class="el-icon-arrow-right"></i></router-link>
						<li>游戏设置 <i class="el-icon-arrow-right"></i></li>
						<router-link to="/changepswd" tag="li">修改密码 <i class="el-icon-arrow-right"></i></router-link>
					</ul>
				</div>
			  </mt-tab-container-item>
			  <!-- <mt-tab-container-item id="tab-container2">

			  </mt-tab-container-item> -->
			</mt-tab-container>
		</div>
	</div>	
</template>

<script>
import { Field ,Header,Button,MessageBox,Toast,Indicator,TabContainer, TabContainerItem ,Navbar,TabItem } from 'mint-ui';
let userdata={};
export default {
  data () {
    return {
    	active:'tab-container1',
    	swipeable:true,
    	isActive:true,
    	uid:userdata.account,
      	balance:userdata.balance,
		role:userdata.role,
		subDealer:userdata.subDealer,
		dailyCashCount:userdata.dailyCashCount,
		subPlayer:userdata.subPlayer,
		account:userdata.account
    }
  },
   components:{
  	'mt-field':Field,
  	'mt-header':Header,
  	'mt-button':Button,
  	'mt-tab-container':TabContainer,
  	'mt-tab-container-item':TabContainerItem,
  	'mt-tab-item':TabItem ,
  	'mt-navbar':Navbar
  },
  beforeCreate:function(){
  	 userdata=JSON.parse(sessionStorage.getItem('userdata'))
  },
  methods: {
  	choseNav (e) {
  		if(e=='tab-container1'){
  			this.isActive=true;
  		}else{
  			this.isActive=false;
  		}
  		this.active=e;
  	},
  	refresh_btn () {
  		this.refreshType=true;
  		Toast('Upload Complete');
  		const _this=this;
  		setTimeout(function(){
  			_this.refreshType=false;
  		},1000)
  	},
  	OutGo () {		
  		var that=this;
  		Indicator.open();
  		this.axios.get(this.$api.authDelete)
		  .then(function (res) { 
		  	Indicator.close();		
		    if(res.data.code==1){
		    	Toast({
				  message: '退出成功',
				  iconClass: 'icon icon-success'
				});
	    		that.$router.push({path:"/login"})	
	    		sessionStorage.clear()
		    }else{
		    	Toast(res.data.msg);
		    	// that.$message({
		     //        type: 'info',
		     //        message: res.data.msg
		     //    });
		    	// alert(res.data.msg)
		    }
		  })
		  .catch(function (response) {
		    console.log(response);
		  });
  	},
  	authDelete(){

  		MessageBox.confirm('此操作退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	this.OutGo();        
        }).catch(() => {
        	Toast({
			  message: '已取消退出操作',
			  duration: 300
			});
                   
        });
  	},
  	paylook () {
  		router.push({ path: 'paylook' })
  	}
  }
}
</script>

<style>
ul li{
	list-style: none;
}
.hearder_1,.hearder_2{
	padding: 4px 10px;
}
.center_cent .hearder_2{
	margin-top: 4px;
}
.center_cent .hearder_2 ul{
	display: flex;
	padding-top: 4px;
	justify-content: space-around;
}
.center_cent .hearder_2 ul li{
	color: #6d6d72;
	padding: 6px 12px;
	border: 1px solid #6d6d72;
	border-radius: 5px;
	font-size: 14px;
	background: white;
    color: #6d6d72;
    animation:LiRoate 1s 1;
}
@keyframes LiRoate
{
	from {transform:translateX(-100%);}
	to {transform:translateX(0);}
}
.buttons-tab {
    background: white;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
}
.buttons-tab .button.active {
    color: #0894ec;
    border-color: #0894ec;
    z-index: 100;
}
.buttons-tab .button {
    color: #5f646e;
    font-size: 0.8rem;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    border: 0;
    border-bottom: 2px solid transparent;
    border-radius: 0;
}
.button.active, .button.active:active {
    color: #0a8ddf;
    border-color: #0a8ddf;
}
.button {
    border: 1px solid #0894ec;
    color: #0894ec;
    text-decoration: none;
    text-align: center;
    display: block;
    border-radius: 0.25rem;
    line-height: 1.25rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: none;
    padding: 0 0.5rem;
    margin: 0;
    height: 1.35rem;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
    font-size: 0.7rem;
    font-family: inherit;
    cursor: pointer;
}
.center_cent .bar-nav{
	top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    background-color: #f7f7f8;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
}
.refresh_animate{
	transition: 1s;
    transform: rotate(360deg);
    overflow: hidden;
}
.refresh_icon{
	position: absolute;
	left: 15px;
	overflow: hidden;
}
.logOutBtn{
	position: absolute;
	right: 15px;
	overflow: hidden;
}
.refresh_icon img{
	width: 28px;
	height: 28px;
	display: block;
}
.bar-nav h3{
	font-weight: normal;
	font-size: 18px;
	line-height: 3;
	background-color: #f7f7f8;
}
.center_cent{
	height: 100%;
	width: 100%;
	overflow: auto;
	background: #efeff4;
}
.center_cent .cent_action ul{
    background: #fff;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    margin: .75rem 0;
    font-size: 0.85rem;
    position: relative;
}
.center_cent .cent_action ul li{
    box-sizing: border-box;
    padding-left: 0.75rem;
    min-height: 2.2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
    color: #6d6d72;
	margin-top: 8px;
	line-height: 2;
	box-sizing: border-box;
	list-style-type: none;
}
.center_cent .cent_action ul li i{
	line-height:'';
}
.center_cent .cent_action{
	width: 100%;
    padding:4px 10px;
    display: -webkit-box;
    box-sizing: border-box;
}
.el-message-box{
	width: 290px;
}
</style>