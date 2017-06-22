<template>
	<div class="players_cont">
		<div class="hearder_1">
			<h3>	
				<span>【直接玩家列表】</span> 
				<span>{{userid}}欢迎你</span>
			</h3>
			
		</div>
		<div class="hearder_2">
			代理 我充值:
			<span>{{paymoney}}</span>元
		</div>
		<div class="cent_action">
			<ul>
				<li>当前位置: {{userid}} [直接玩家列表] 首页</li>
			</ul>
			<div>
				<ul>
					<li>
						<figure>
						  <img src="img_pulpit.jpg" alt="The Pulpit Rock">
						  <figcaption>Fig1. </figcaption>
						</figure>
						<div>
							Money
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="page_btn">
			<el-pagination
			  middle
			  layout="prev, pager, next"
			  :page-size="pgsize"
			  :total="total" @current-change="handleCurrentChange">
			</el-pagination>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      userid: '123',
      paymoney:'111',
      zhijiewanjia:'111',
      xiajidaili:'2222',
      jinrichongzhi:'111111',
      pgsize:5,
      total:50,
      page:0
    }
  },
  created:function(){
  	 this.submitAccount()
  },
  methods: {
  	submitAccount () {		
  		this.axios.get(this.$api.getSubPlayer)
		  .then(function (res) {
		    if(res.data.code==1){
	    	// 	that.$router.push({path:"/center",params:{
	  			// 	uid:res.data.data.uid,
	  			// 	balance:res.data.data.balance,
	  			// 	role:res.data.data.role,
	  			// 	subDealer:res.data.data.subDealer,
	  			// 	dailyCashCount:res.data.data.dailyCashCount,
    		// 		subPlayer:res.data.data.subPlayer,
	  			// 	account:res.data.data.account
	  			// }})\
	  			console.log(res)
	  			// const userdata={
	  			// 	uid:res.data.data.uid,
	  			// 	balance:res.data.data.balance,
	  			// 	role:res.data.data.role,
	  			// 	subDealer:res.data.data.subDealer,
	  			// 	dailyCashCount:res.data.data.dailyCashCount,
    		// 		subPlayer:res.data.data.subPlayer,
    		// 		password:that.password,
	  			// 	account:res.data.data.account
	  			// }
	    	// 	sessionStorage.setItem('userdata',JSON.stringify(userdata))
		    }else{
		    	alert(res.data.msg)
		    }
		  })
		  .catch(function (response) {
		    console.log(response);
		  });
  	},
  	handleCurrentChange(val) {
	    console.log(`当前页: ${val}`);
	    this.page=val
	    this.submitAccount()
	}
  }
}
</script>

<style>
.players_cont{
	height: 100%;
	width: 100%;
	padding-left: 8px;
	background: rgb(247, 247, 247);
}
.players_cont .hearder_1,.players_cont .hearder_2{
	padding: 4px 10px;
}

.players_cont .cent_action ul li{
    display: inline-flex;
	width: 90%;
	background: #ccc;
	margin-top: 8px;
	padding-left: 4px;
	line-height: 2;
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
	padding: 10px;

}

</style>