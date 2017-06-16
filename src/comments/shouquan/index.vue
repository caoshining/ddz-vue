<template>
	<div class="shouquan_cont">
		<div class="hearder_1">
			<h3>	
				<span>【首页】</span> 
				<span>{{uid}}欢迎你</span>
			</h3>
			
		</div>
		<div class="hearder_2">
			代理 我充值:
			<span>{{balance}}</span>元
		</div>
		<div class="cent_action">
			<div>
				<el-row :gutter="2" type='flex' class="heard_title"  justify='start' align='middle'>
					<el-col :span="22"  justify='start' align='middle'>
						<div class="grid-content bg-purple">当前位置: {{uid}} [直接玩家列表] 首页</div>
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
				  	<el-input type="password"  placeholder="请输入ID" v-model="idinput" auto-complete="off"></el-input>
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
</template>

<script>
let userdata={};
export default {
  data () {
    return {
		uid:userdata.uid,
		balance:userdata.balance,
		role:userdata.role,
		subDealer:userdata.subDealer,
		dailyCashCount:userdata.dailyCashCount,
		subPlayer:userdata.subPlayer,
		account:userdata.account,
		idinput:''
    }
  },
  beforeCreate:function(){
  	 userdata=JSON.parse(sessionStorage.getItem('userdata'))
  },
  methods: {
  	submitID () {	
	  	const that=this;
	  	console.log(that.idinput)
	  	if(that.idinput!=''){
	  		this.axios.get(this.$api.createDealer, {
			    params: {
			      account:userdata.account,
			      password:userdata.password,
			      comment:that.idinput
			    }
			})
			.then(function (res) {
			    if(res.data.code==1){
		    		
			    }else{
			    	alert(res.data.msg)
			    }
			  })
			.catch(function (response) {
			    console.log(response);
			});

	  	}else{
	  		alert('ID不能为空')
	  	}
  	}
  }
}
</script>

<style type="text/css">
.shouquan_cont{
	height: 100%;
	width: 100%;
	padding-left: 8px;
	background: rgb(247, 247, 247);
}
.shouquan_cont .hearder_1,.shouquan_cont .hearder_2{
	padding: 4px 10px;
}
.shouquan_cont .center_action{
	height: 100%;
	width: 100%;
	padding-left: 8px;
	background: rgb(247, 247, 247);
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
}
</style>