<template>
	<div class="center_cent">
		<nav class="bar bar-nav">
			<h3>	
				<span>【首页】</span> 
				<span>欢迎你 {{uid}} </span>
			</h3>
		</nav>
		<div class="center_action">
			
			<div class="hearder_2">
				代理 我充值:
				<span>{{balance}}</span>元
			</div>
			<div class="cent_action">
				<ul>
					<router-link class="router_li" to="/playerPay" tag="li">充值 <i class="el-icon-arrow-right"></i></router-link>
					<router-link to="/paylook" tag="li">充值查询  <i class="el-icon-arrow-right"></i></router-link>
					<router-link to="/allwj" tag="li">总计直接玩家 {{subPlayer}} 人 <i class="el-icon-arrow-right"></i></router-link>
					<router-link to="/daili" tag="li">总计授权下级代理 {{subDealer}} 人 <i class="el-icon-arrow-right"></i></router-link>
					<li>今日充值统计 {{dailyCashCount}} 元 <i class="el-icon-arrow-right"></i></li>
					<router-link to="/shouquan" tag="li">授权下级代理 <i class="el-icon-arrow-right"></i></router-link>
					<router-link to="/changepswd" tag="li">修改密码 <i class="el-icon-arrow-right"></i></router-link>
					<li  @click="authDelete">退出</li>
				</ul>
			</div>
		</div>
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
		account:userdata.account
    }
  },
  beforeCreate:function(){
  	 userdata=JSON.parse(sessionStorage.getItem('userdata'))
  },
  methods: {
  	OutGo () {		
  		var that=this;
  		this.axios.get(this.$api.authDelete)
		  .then(function (res) { 		
		    if(res.data.code==1){
		    	that.$message({
		            type: 'success',
		            message: '退出成功!'
		        });
	    		that.$router.push({path:"/login"})	
	    		sessionStorage.clear()
		    }else{
		    	that.$message({
		            type: 'info',
		            message: res.data.msg
		        });
		    	// alert(res.data.msg)
		    }
		  })
		  .catch(function (response) {
		    console.log(response);
		  });
  	},
  	authDelete(){
  		this.$confirm('此操作退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	this.OutGo();        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出操作'
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
.hearder_1,.hearder_2{
	padding: 4px 10px;
}
.center_cent .bar-nav{
	top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    background-color: #f7f7f8;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
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
	overflow: hidden;
	background: #efeff4;

}
.center_action{
	padding-left: 8px;
}
.cent_action ul li{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	background: #20A0FF;
    color: #fff;
	margin-top: 8px;
	padding-left: 4px;
	line-height: 2;
	box-sizing: border-box;
	list-style-type: none;
}
.cent_action ul li i{
	line-height:'';
}
.cent_action{
	width: 100%;
	padding: 10px;
}
.el-message-box{
	width: 290px;
}
</style>