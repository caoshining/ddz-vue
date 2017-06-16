<template>
	<div class="loginContent">
		<div  class="main_content">
			<el-row :gutter="2" type='flex' class="heard_title"  justify='center' align='middle'>
				<el-col :span="8"  justify='center' align='middle'>
					<div class="grid-content bg-purple">代理登录</div>
				</el-col>
			</el-row>

			<el-row :gutter="2" type='flex' class="row-bg"  justify='center' align='middle'>
			  <el-col :span="8">
				<div class="grid-content bg-purple">游戏ID</div>
			  </el-col>
			  
			  <el-col :span="12">
			  	<el-input v-model="input" placeholder="游戏ID"></el-input>
			  </el-col>
			</el-row>
			<el-row :gutter="2" type='flex' justify='center' align='middle'>
			  <el-col :span="8" justify='center'>
				<div class="grid-content bg-purple">密码</div>
			  </el-col> 
			  <el-col :span="12">
			  	<el-input type="password"  placeholder="请输入密码" v-model="password" auto-complete="off"></el-input>
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
      input: '',
      password:''
    }
  },
  methods: {
  	submitAccount () {
  		const that=this;
  		console.log(that)
  		// router.push('center')
  		// this.$http.get(this.$api.auth,{username:that.input,password:that.password}).then((res) => {
  		// 	res=res.body;
  		
  		// 	this.$router.push({path:"/center"})
  		// 	//跳转到功能中心
  		// 	this.$router.push({path:"/center"})
  		// 	if(res.code==0){

  		// 	}
  		// });
  		this.axios.get(this.$api.auth, {
		    params: {
		      username:that.input,
		      password:that.password
		    }
		  })
		  .then(function (res) {
  		
		    if(res.data.code==1){
	    		that.$router.push({path:"/center",params:{
	  				uid:res.data.data.uid,
	  				balance:res.data.data.balance,
	  				role:res.data.data.role,
	  				subDealer:res.data.data.subDealer,
	  				dailyCashCount:res.data.data.dailyCashCount,
    				subPlayer:res.data.data.subPlayer,
	  				account:res.data.data.account
	  			}})
	  			const userdata={
	  				uid:res.data.data.uid,
	  				balance:res.data.data.balance,
	  				role:res.data.data.role,
	  				subDealer:res.data.data.subDealer,
	  				dailyCashCount:res.data.data.dailyCashCount,
    				subPlayer:res.data.data.subPlayer,
    				password:that.password,
	  				account:res.data.data.account
	  			}
	    		sessionStorage.setItem('userdata',JSON.stringify(userdata))
		    }else{
		    	alert(res.data.msg)
		    }
		  })
		  .catch(function (response) {
		    console.log(response);
		  });
  	}  
  }
}
</script>

<style type="text/css">
	
	.loginContent{
		height: 100%;
		width: 100%;
		display: flex;
	    align-items: center;
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