<template>
	<div class="loginContent">
	
		<div  class="main_content">
			<mt-header fixed title="登录" class="bar-nav"></mt-header>
			<!-- <nav class="bar bar-nav">
				<h1 class="title"></h1>
			</nav> -->
	
			<div class="grid-content bg-purple login_heard_title"></div>

			<mt-field label="用户名" placeholder="请输入用户名" v-model="input"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password"  v-model="password"></mt-field>
			<!-- <el-row :gutter="2" type='flex' class="row-bg id_input"  justify='center' align='middle'>
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
			</el-row> -->

			<!-- <el-row :gutter="2" type='flex' class='sub_btn' justify='center' align='middle'>
				<el-col :span="8"> -->
			<div class="sub_btn">
				<mt-button type="danger" size="small" plain  @click="cancleBtn" >取消</mt-button>
					<!-- </el-col> -->
					<!-- <el-col :span="8"> -->
				<mt-button type="primary"  size="small" plain @click="submitAccount" >登陆</mt-button>
			</div>
				<!-- </el-col> -->
			<!-- </el-row> -->
		</div>
	</div>
</template>

<script>
import { Field ,Header,Button,Toast } from 'mint-ui';
export default {
  data () {
    return {
      input: '',
      password:''
    }
  },
  components:{
  	'mt-field':Field,
  	'mt-header':Header,
  	'mt-button':Button
  },
  methods: {
  	cancleBtn(){
  		this.input=''
  		this.password=''
  	},
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
		    	Toast({
				  message: '登录成功',
				  position: 'center',
				  duration: 1000
				});
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
		    	Toast({
				  message: res.data.msg,
				  position: 'center',
				  duration: 1000
				});
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
	.bar-nav{
		/*position: fixed;*/
		top: 0;
	    right: 0;
	    left: 0;
	    z-index: 10;
	    padding-right: 0.5rem;
	    color: #3d4145;
	    padding-left: 0.5rem;
	    background-color: #f7f7f8;
	    -webkit-backface-visibility: hidden;
	    backface-visibility: hidden;
	    text-align: center;
	}
	.bar-nav h1{
		font-weight: normal;
		font-size: 18px;
		line-height: 3;
	}
	.id_input{
		margin:10px 0;
	}
	.loginContent{
		height: 100%;
		width: 100%;
		display: flex;
	    background: #efeff4;	
	    align-items: top;
	}
	.main_content{
		width: 100%;
	}
	.sub_btn{
		text-align: center;
		margin-top: 20px;
	    display: flex;
   		justify-content: space-evenly;
	}
	.login_heard_title{
		margin-top: 10%;
	}
</style>