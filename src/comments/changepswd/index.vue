<template>
<div class="loginOutContent">
	<div class="main_content">
		<el-row :gutter="2" type='flex' class="heard_title"  justify='center' align='middle'>
			<el-col :span="8"  justify='center' align='middle'>
				<div class="grid-content bg-purple">修改密码</div>
			</el-col>
		</el-row>

		<el-row :gutter="2" type='flex' class="row-bg"  justify='center' align='middle'>
		  <el-col :span="8">
			<div class="grid-content bg-purple">游戏ID</div>
		  </el-col>
		  
		  <el-col :span="12">
		  	<el-input :value='gameid' :disabled="true" placeholder="游戏ID"></el-input>
		  </el-col>
		</el-row>
		<el-row :gutter="2" type='flex' justify='center' align='middle'>
		  <el-col :span="8" justify='center'>
			<div class="grid-content bg-purple">旧密码：</div>
		  </el-col> 
		  <el-col :span="12">
		  	<el-input type="password"  placeholder="请输入密码" v-model="oldpswd" auto-complete="off"></el-input>
		  </el-col>
		</el-row>
	
		<el-row :gutter="2" type='flex' justify='center' align='middle'>
		  <el-col :span="8" justify='center'>
			<div class="grid-content bg-purple">新密码：</div>
		  </el-col> 
		  <el-col :span="12">
		  	<el-input type="password"  placeholder="请输入新密码" v-model="newPwd" auto-complete="off"></el-input>
		  </el-col>
		</el-row>
		
		<el-row :gutter="2" type='flex' justify='center' align='middle'>
		  <el-col :span="8" justify='center'>
			<div class="grid-content bg-purple">再一次密码：</div>
		  </el-col> 
		  <el-col :span="12">
		  	<el-input type="password"  placeholder="请输入新密码"v-model="rightpswd" auto-complete="off"></el-input>
		  </el-col>
		</el-row>
		
		<el-row :gutter="2" type='flex' class='sub_btn' justify='center' align='middle'>
			<el-col :span="8">
				<el-button type="primary"  @click="submitAccount" >提交</el-button>
			</el-col>
		</el-row>
	</div>
</div>	
</template>

<script>
let userdata={};
export default {
  data () {
    return {
      gameid:userdata.uid,
      oldpswd:'',
      account:userdata.account,
      newPwd:'',
      rightpswd:''
    }
  },
  beforeCreate:function(){
  	 userdata=JSON.parse(sessionStorage.getItem('userdata'))
  },
  methods: {
  	submitAccount () {
  		const that=this;
  		if(that.oldpswd==''){
  			alert('旧密码不能为空')
  			return false;
  		}else if(that.newPwd==''){
  			alert('新密码不能为空')
  			return false;
  		}else if(that.rightpswd==''){
  			alert('确认新密码不能为空')
  			return false;
  		}else if(that.newPwd==that.rightpswd){
  			this.axios.get(this.$api.changePwd, {
			    params: {
			      account:that.account,
			      newPwd:that.newPwd,
			      oldPwd:that.oldpswd
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
  			alert('两次输入的密码不一致')
  		}
  	}
  }
}
</script>
<style type="text/css">
	
	.loginOutContent{
		height: 100%;
		width: 100%;
		display: flex;
	    align-items: rgb(247, 247, 247);
	}
	.main_content{
		width: 100%;
	}
	.sub_btn{
		text-align: center;
		margin-top: 20px;
	}
	.heard_title{
		margin:15px auto;
	}
</style>