<template>
	<div class="paylook_cont">
		<router-link to="/center" tag="div" class="hearder_1">
			【首页】{{userid}}欢迎你
		</router-link>
		<div class="hearder_2">
			代理 我充值:
			<span>{{paymoney}}</span>元
		</div>
		<div class="cent_action">
			<ul>
				<li>
					当前位置 {{userid}} [代理] 首页
				</li>
				<li>
					<div class="block">
					    <span class="demonstration">开始时间</span>
					    
					    <el-date-picker
					      v-model="date1"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					</div>
					  
				</li>
				<li>
					<div class="block">
					    <span class="demonstration">结束时间</span>
					    <el-date-picker
					      v-model="date2"
					      type="date"
					      placeholder="选择日期"
					      :picker-options="pickerOptions0">
					    </el-date-picker>
					</div>
					  
				</li>
				<li>{{userid}}总充值金额： {{paymoney}} 元</li>
				<li>直接发展的玩家充值
				 	<span @click='lookDetail("zjsshow")'>展开</span>
				 	{{xiajidaili}} 元
				 </li>
				<div class="details" v-if='zjsshow'>
				 	<el-row :gutter="0" type='flex' class="heard_title"  justify='space-between' align='middle'>
					  <el-col :span="6"  justify='center' align='middle'>
						  <div class="grid-content bg-purple">
						  	ID
						  </div>
					  </el-col>
					  <el-col :span="6"  justify='center' align='middle'>
						  	<div class="grid-content bg-purple-light">
						  		充值金额
						  	</div>
					  </el-col>
					  <el-col :span="6"  justify='center' align='middle'>
						  <div class="grid-content bg-purple">
						  	详情
						  </div>
					  </el-col>
					</el-row>
				</div>
				<li>
					下级代理玩家充值 {{jinrichongzhi}} 元
					<span @click='lookDetail("xjdlshwo")'>展开</span>
				</li>
				<div  class="details" v-if='xjdlshwo'>
				 	<el-row :gutter="0" type='flex' class="heard_title"  justify='space-between' align='middle'>
					  <el-col :span="6"  justify='center' align='middle'>
						  <div class="grid-content bg-purple">
						  	ID
						  </div>
					  </el-col>
					  <el-col :span="6"  justify='center' align='middle'>
						  	<div class="grid-content bg-purple-light">
						  		充值金额
						  	</div>
					  </el-col>
					  <el-col :span="6"  justify='center' align='middle'>
						  <div class="grid-content bg-purple">
						  	详情
						  </div>
					  </el-col>
					</el-row>
				</div>
				<li>
					此查询期间（其中我自己充值）
					<span @click='lookDetail("myshow")'>展开</span>
				</li>
				<div  class="details" v-if='myshow'>
				 	<el-row :gutter="0" type='flex' class="heard_title"  justify='space-between' align='middle'>
					  <el-col :span="6"  justify='center' align='middle'>
						  <div class="grid-content bg-purple">
						  	ID
						  </div>
					  </el-col>
					  <el-col :span="6"  justify='center' align='middle'>
						  	<div class="grid-content bg-purple-light">
						  		充值金额
						  	</div>
					  </el-col>
					  <el-col :span="6"  justify='center' align='middle'>
						  <div class="grid-content bg-purple">
						  	详情
						  </div>
					  </el-col>
					</el-row>
				</div>
				<router-link to="/changepswd" tag="li">修改密码</router-link>
				<li>退出</li>
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
      jinrichongzhi:'111111',
      zjsshow:false,
      xjdlshwo:false,
      myshow:false,
      date1:'',
      date2:''
   //    pickerOptions0: {
          
   //    },
	  // pickerOptions1: {
	  //   disabledDate(value1) {
	  //       return value1 < Date.now() - 8.64e7;

	  //     }
	  // },
      // value1: '',
      // value2: ''
      // value6:'',
    }
  },
  methods: {
  	submitAccount () {		
  		this.$http.post('/someUrl', {username:this.input,password:this.password}).then((res) => {
  			res=res.body;
  			if(res.error==0){

  			}
  		});
  	},
  	lookDetail (target) {
  		switch(target){
  			case 'zjsshow':
  			this.zjsshow=!this.zjsshow
  			break;
  			case 'xjdlshwo':
  			this.xjdlshwo=!this.xjdlshwo
  			break;
  			case 'myshow':
  			this.myshow=!this.myshow
  			break;
  		}
  	}
  }
}
</script>

<style>

.paylook_cont{
	height: 100%;
	width: 100%;
	padding-left: 8px;
	background: rgb(247, 247, 247);
}
.paylook_cont .cent_action ul li{
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
.paylook_cont .cent_action{
	width: 100%;
	padding: 10px;
}
div.details{
	width: 90%;
    margin-top: 8px;
    padding-left: 4px;
    line-height: 2;
    box-sizing: border-box;
}
</style>