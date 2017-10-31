<template>
	<div id="shouquan_wrap">
		<mt-header title="【授权下级代理】 " class="bar-nav changePwd_bar_nav">
			<router-link  :to="{ path: '/center'}" replace slot="left" >
			    <mt-button icon="back">返回</mt-button>
			</router-link>
		  <!-- <mt-button slot="right" size="small"  @click="authDelete"> 
				退出
		  </mt-button> -->
		</mt-header>
		<div class="shouquan_cont">
			<div class="hearder_1">
				<div>
						<span>{{uid}}欢迎你</span>
				</div>	
			</div>
			<!-- <div class="hearder_2">
				<div>
					代理 我充值:
					<span>{{balance}}</span>元
				</div>
			</div> -->
			<div class="cent_action">
				<div>
					<el-row :gutter="2" type='flex' class="heard_title"  justify='start' align='middle'>
						<el-col :span="22"  justify='start' align='middle'>
							<div class="grid-content bg-purple">当前您所在位置: 授权下级代理 </div>
						</el-col>
					</el-row>
					<el-row :gutter="2" type='flex' class="heard_title"  justify='start' align='middle'>
						<el-col :span="8"  justify='start' align='middle'>
							<div class="grid-content bg-purple">我现在正式授权</div>
						</el-col>
					</el-row>
					<el-row :gutter="2" type='flex' justify='start' align='middle'>
					  <el-col :span="8" justify='start'>
						<div class="grid-content bg-purple">ID号码</div>
					  </el-col> 
					  <el-col :span="12">
					  	<el-input type="text"  placeholder="请输入ID" v-model="idinput" auto-complete="off"></el-input>
					  </el-col>
					</el-row>

					<el-row :gutter="2" type='flex' class="heard_title"  justify='start' align='middle'>
						<el-col :span="8"  justify='start' align='middle'>
							<div class="grid-content bg-purple">为我的代理商</div>
						</el-col>
					</el-row>					
				</div>
			</div>
			<el-row :gutter="2" type='flex' class='sub_btn' justify='center' align='middle'>
				<el-col :span="8">
					<el-button type="primary" @click="submitID">确定</el-button>
				</el-col>
			</el-row>
		</div>
	</div>	
</template>

<script>
import { Field ,Header,Button,MessageBox,Toast } from 'mint-ui';
import {createDealer} from '../../config/api'
let userdata={};
export default {
  data () {
    return {
		uid:userdata.account,
		balance:userdata.balance,
		role:userdata.role,
		subDealer:userdata.subDealer,
		dailyCashCount:userdata.dailyCashCount,
		subPlayer:userdata.subPlayer,
		account:userdata.account,
		idinput:''
    }
  },
  components:{
  	'mt-field':Field,
  	'mt-header':Header,
  	'mt-button':Button
  },
  beforeCreate:function(){
  	 userdata=JSON.parse(sessionStorage.getItem('userdata'))
  },
  methods: {
  	submitID () {	
	  	const that=this;
	  	console.log(that.idinput)
	  	if(that.idinput!=''){
	  		MessageBox.confirm('确定执行此操作?').then(action => {
	  			// 等待增添新View
	  			let para = {
					account: _this.addDealerForm.account, 
					pwd: _this.addDealerForm.pwd, 
					comment: _this.addDealerForm.comment, 
					role:_this.addDealerForm.dealerType,
					tel:_this.addDealerForm.tel,
					parentDealer:_this.addDealerForm.parentDealer,
				};
	  			createDealer({
			      account:userdata.account,
			      password:userdata.password,
			      comment:that.idinput
			    })
	  			.then(function (res) {
				    if(res.data.code==1){
				    	MessageBox('温馨提示', res.data.msg);
				    }else{
				    	MessageBox('温馨提示', res.data.msg);
				    }
				  })
				.catch(function (response) {
				    console.log(response);
				});
			 //  	this.axios.get(this.$api.createDealer, {
			 //    	params: {
				//       account:userdata.account,
				//       password:userdata.password,
				//       comment:that.idinput
				//     }
				// })
				// .then(function (res) {
				//     if(res.data.code==1){
				//     	MessageBox('温馨提示', res.data.msg);
				//     }else{
				//     	MessageBox('温馨提示', res.data.msg);
				//     }
				//   })
				// .catch(function (response) {
				//     console.log(response);
				// });
			})
	  	}else{
	  		MessageBox('温馨提示', 'ID不能为空');
	  	}
  	}
  }
}
</script>

<style type="text/css">
#shouquan_wrap{
	height: 100%;
	width: 100%;
    background: #efeff4;
	overflow: hidden;
}
.shouquan_cont{
	margin-top: 40px;
	/*padding-left: 8px;*/
    background: #efeff4;
}
.shouquan_cont .hearder_1{
	padding-top: 12px;
	padding-bottom: 10px;
}
.shouquan_cont .hearder_2{
	padding-top: 12px;
	padding-bottom: 12px;
}

.shouquan_cont .hearder_1 div{
	display: block;
	border: 1px solid #6d6d72;
    overflow: hidden;
    border-radius: 4px;
    padding: 5px;
    background: white;
    color: #6d6d72;
    animation:Roate_1 1s 1;
    width: fit-content;
}
@keyframes Roate_1
{
	from {
		transform:translateY(-100%);
	}
	to {
		transform:translateY(0);
	}
}

.shouquan_cont .hearder_2 div{
	display: block;
	border: 1px solid #6d6d72;
    overflow: hidden;
    border-radius: 4px;
    padding: 5px;
    background: white;
    color: #6d6d72;
    animation:Roate 1s 1;
    width: fit-content;
}
@keyframes Roate
{
	from {transform:rotateX(0deg);}
	to {transform:rotateX(360deg);}
}
.shouquan_cont .center_action{
	height: 100%;
	width: 100%;
	padding-left: 8px;
	background: rgb(247, 247, 247);
}
.shouquan_cont .cent_action div{
	text-align: left;
}
.shouquan_cont .cent_action ul li{
	display: block;
	width: 90%;
	background: #20A0FF;
    color: #fff;
	margin-top: 8px;
	padding-left: 4px;
	line-height: 2;
	box-sizing: border-box;
	list-style-type: none;
}
.shouquan_cont .cent_action{
	width: 100%;
	padding: 10px;
	background: #fff;
}
</style>