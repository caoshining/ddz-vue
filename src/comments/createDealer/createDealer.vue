<template>
	<div class="players_cont">
		<mt-header title="【新增代理】" class="bar-nav">
			<router-link :to="{ path: '/center'}" replace slot="left" >
			    <mt-button icon="back">返回</mt-button>
			</router-link>
		  <!-- <mt-button slot="right" size="normal" type="primary"  plain @click="MenuType"> 
				菜单
		  </mt-button> -->
		</mt-header>
		<div class="cent_action">
			<div>
				<mt-field label="账号" placeholder="请输入用户名" v-model="username"></mt-field>
				<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
				<mt-field label="手机号" placeholder="请输入手机号" :attr="{ maxlength: 11 }" type="tel" v-model="phone"></mt-field>
				<mt-radio
				class="check_radius"
				  title="级别"
				  v-model="jibie"
				  :options="['一级代理', '二级代理']">
				</mt-radio>
				<mt-field label="备注" placeholder="" type="textarea" rows="2" v-model="introduction"></mt-field>
				<li class="btn_cent">
					<mt-button type="default" size="small" @click.native="cancle">取消</mt-button>
					<mt-button type="primary" size="small" @click.native="onSubmit">提交</mt-button>
				</li>
			</div>
		</div>
	</div>
</template>

<script>
import { Field,Header,Button,Popup,Radio,MessageBox,Toast} from 'mint-ui';
import {  createDealer } from '../../config/api';

export default {
  data () {
    return {
	  username:'',
	  password:'',
	  phone:'',
	  jibie:'',
	  introduction:''
    }
  },
   components:{
  	'mt-field':Field,
  	'mt-header':Header,
  	'mt-radio':Radio,
  	'mt-popup':Popup,
  	'mt-button':Button
  },
  computed:{
      // inputUserId:{
      //   get:function(){
      //     return this.actionParams.userId;
      //   },
      //   set:function(newValue){
      //       this.actionParams.userId=newValue.replace(/[^\d]/g,'');
      //   }
      // }
    },
  methods: {
    MenuType(){
    	this.popupVisible=!this.popupVisible
    },
    cancle(e){
    	this.$router.go(-1)
    },
    onSubmit () {
    	const that=this;	
		if(that.addCashForm.account!=''){
			MessageBox.confirm('确定执为'+that.addCashForm.account+'用户充值 $ '+that.addCashForm.cash+'吗?').then(action => {
				let para = {
						account: that.addCashForm.account,
						cash: that.addCashForm.cash,
						desc: that.addCashForm.desc
					};
				  createDealer(para).then(function (res) {
				    if(res.data.code==1){
				    	MessageBox('温馨提示', '充值成功');
			  			that.$router.push({path:"/center"})
				    }else{
				    	MessageBox('温馨提示', res.data.msg);
				    	// alert(res.data.msg)
				    }
				  })
				  .catch(function (response) {
				    console.log(response);
				  });
			});
	  		
		}else{
			MessageBox('温馨提示', '请输入账号');
		}
    },
    handleChange (value) {

    }
  }
}
</script>

<style>
.players_cont{
	height: 100%;
	width: 100%;
	overflow: auto;
	background: #efeff4;
	/*background: rgb(247, 247, 247);*/
}
.players_cont .hearder_1,.players_cont .hearder_2{
	padding: 4px 10px;
}
.MenuContent{
	height: 100%;
}
.check_radius{
	display: flex;
}
.btn_cent{
	list-style: none;
	display: flex;
	justify-content: space-around;
	padding-bottom: 10px;
}
.players_cont .cent_action ul{
    padding-right: 29px;
}
.players_cont .cent_action ul li{
    display: inline-flex;
	width: 100%;
	background: #ccc;
	margin-top: 8px;
	/*padding-left: 4px;*/
	line-height: 2;
	background:#fff;
	box-sizing: border-box;
	list-style-type: none;
	justify-content: center;
}
.players_cont .cent_action ul li>figure,
.players_cont .cent_action ul li>div{
	display: flex;
	flex-grow: 1;
	text-align: center;
}
.page_btn{
	text-align: center;
	padding-right: 6%;
}
.cent_action{
	width: 100%;
	/*padding: 10px;*/

}

</style>