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
		  	<el-input type="password"  placeholder="请输入新密码" v-model="newpswd" auto-complete="off"></el-input>
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
export default {
  data () {
    return {
      gameid: '111',
      oldpswd:'',
      newpswd:'',
      rightpswd:''
    }
  },
  methods: {
  	submitAccount () {
  		
  		this.$http.get('/someUrl', {
  			gameid:this.gameid,
  			oldpswd:this.oldpswd,
  			newpswd:this.newpswd,
  			rightpswd:this.rightpswd
  		}).then((res) => {
  			res=res.body;
  			if(res.error==0){

  			}
  		});
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