<template>
	<div class="shouquan_cont">
		<div class="hearder_1">
			<h3>	
				<span>【首页】</span> 
				<span>{{userid}}欢迎你</span>
			</h3>
			
		</div>
		<div class="hearder_2">
			代理 我充值:
			<span>{{paymoney}}</span>元
		</div>
		<div class="cent_action">
			<div>
				<el-row :gutter="2" type='flex' class="heard_title"  justify='start' align='middle'>
					<el-col :span="22"  justify='start' align='middle'>
						<div class="grid-content bg-purple">当前位置: {{userid}} [直接玩家列表] 首页</div>
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
				  	<el-input type="password"  placeholder="请输入ID" v-model="userid" auto-complete="off"></el-input>
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
				<el-button type="primary" @click="submitID">正常按钮</el-button>
			</el-col>
		</el-row>
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
      idinput:''
    }
  },
  methods: {
  	submitID () {		
  		this.$http.post('/someUrl', {ID:this.idinput}).then((res) => {
  			res=res.body;
  			if(res.error==0){

  			}
  		});
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
	background: yellow;
}
.shouquan_cont .cent_action ul li{
	display: block;
	width: 90%;
	background: #ccc;
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