<template>
	<div class="center_action">
		<div class="hearder_1">
			<h3>	
				<span>【首页】</span> 
				<span>欢迎你 {{userid}} </span>
			</h3>
		</div>
		<div class="hearder_2">
			代理 我充值:
			<span>{{paymoney}}</span>元
		</div>
		<div class="cent_action">
			<ul>
				<router-link to="/paylook" tag="li">充值查询</router-link>
				<router-link to="/allwj" tag="li">总计直接玩家 {{zhijiewanjia}} 人</router-link>
				<router-link to="/daili" tag="li">总计授权下级代理 {{xiajidaili}} 人</router-link>
				<li>今日充值统计 {{jinrichongzhi}} 元</li>
				<router-link to="/shouquan" tag="li">授权下</li>级代理</router-link>
				<router-link to="/changepswd" tag="li">修改密码</router-link>
				<router-link to="/allwj" tag="li">退出</router-link>
			</ul>
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
      jinrichongzhi:'111111'
    }
  },
  created:function(){
  	console.log(this.prototype.$userdata)
  },
  methods: {
  	submitAccount () {		
  		this.$http.post('/someUrl', {username:this.input,password:this.password}).then((res) => {
  			res=res.body;
  			if(res.error==0){

  			}
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
.center_action{
	height: 100%;
	width: 100%;
	padding-left: 8px;
	background: rgb(247, 247, 247);
}
.cent_action ul li{
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
.cent_action{
	width: 100%;
	padding: 10px;
}
</style>