<template>
	<div class="players_cont">
		<mt-header title="【代理充值】" class="bar-nav">
			<router-link :to="{ path: '/center'}" replace slot="left" >
			    <mt-button icon="back">返回</mt-button>
			</router-link>
		  <!-- <mt-button slot="right" size="normal" type="primary"  plain @click="MenuType"> 
				菜单
		  </mt-button> -->
		</mt-header>
		<!-- 
		<div class="hearder_1">
			<h3>	
				<span>【玩家充值】</span> 
				<span></span>
			</h3>
			
		</div> -->
		<!-- <div class="hearder_2">
			代理 我充值:
			<span>{{paymoney}}</span>元
		</div> -->
		<div class="cent_action">
			<!-- <nav class="bar bar-nav">
				<h1 class="title">当前位置: {{userid}} [玩家充值]</h1>
			</nav>	
			<div>
				首页	
			</div>
			<mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field> -->
			<div>
				<ul>
					<li>
						<el-form ref="form" label-width="70px" :model="addCashForm"  @submit.prevent="onSubmit" style="width:100%;">
							<el-form-item label="账号" prop="userId">
								<el-input v-model="addCashForm.account" type="small"></el-input>
							</el-form-item>
							<el-form-item label="金额" >
								<el-input-number v-model="addCashForm.cash" :min="1"></el-input-number>
							</el-form-item>
							<el-form-item label="备注">
								<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model.trim="addCashForm.desc"></el-input>
							</el-form-item>
							<el-form-item justify="center">
					      		<el-button type="primary" style="margin-left: 20%;width:120px;" @click.native.prevent="onSubmit" >确认</el-button>
							</el-form-item>
						</el-form>
					</li>
				</ul>
			</div>
			<mt-popup
			  v-model="popupVisible"
			  position='right'
			  popup-transition="popup-right"
			  modal="popMask"
			  class="MenuContent"
			 >
			  <ul>
			  	<li>
			  		222
			  	</li>
			  	<li>333</li>
			  	<li>444</li>
			  </ul>
			</mt-popup>
		</div>
	</div>
</template>

<script>
import { Field,Header,Button,Popup,MessageBox,Toast} from 'mint-ui';
import {  addCash } from '../../config/api';

export default {
  data () {
    return {
	  popupVisible:false,
	  popMask:false,
      userid: '123',
      paymoney:'111',
      zhijiewanjia:'111',
      xiajidaili:'2222',
      jinrichongzhi:'111111',
      pgsize:5,
      total:50,
      // inputUserId:'',
      actionParams:{
      	userId: '',
      	itemId:10001,
      	number: 0,
      	desc:''
      },
      addCashForm: {
			account: '',
			cash: '',
			desc:''
		},
      checkRules:{
            userId:[
                {required:true, message:"账号", trigger:'blur'}, 
                {validator:(rule,value,callback)=>{
                  if(value!=''){
                      callback(new Error("账号不能为空"));
                  }else{
                      callback();
                  }
                }}
            ]
        },
      num1:0,
      desc:'',
      page:0
    }
  },
   components:{
  	'mt-field':Field,
  	'mt-header':Header,
  	'mt-popup':Popup,
  	'mt-button':Button
  },
  computed:{
      inputUserId:{
        get:function(){
          return this.actionParams.userId;
        },
        set:function(newValue){
            this.actionParams.userId=newValue.replace(/[^\d]/g,'');
        }
      }
    },
  methods: {
  	 methods: {
      handleChange(value) {
        console.log(value);
      }
    },
    MenuType(){
    	this.popupVisible=!this.popupVisible
    },
    onSubmit () {
    	const that=this;	
    	console.log(that.$api.addItem)
		if(that.addCashForm.account!=''){
			MessageBox.confirm('确定执为'+that.addCashForm.account+'用户充值 $ '+that.addCashForm.cash+'吗?').then(action => {
				let para = {
						account: that.addCashForm.account,
						cash: that.addCashForm.cash,
						desc: that.addCashForm.desc
					};
				  addCash(para).then(function (res) {
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