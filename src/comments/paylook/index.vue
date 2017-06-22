<template>
	<div class="paylook_cont">
		<router-link to="/center" tag="div" class="hearder_1">
			【首页】{{uid}}欢迎你
		</router-link>
		<div class="hearder_2">
			代理 我充值:
			<span>{{balance}}</span>元
		</div>
		<div class="cent_action">
			<ul>
				<li>
					当前位置 {{uid}} [代理] 首页
				</li>
				<li>
					<div class="block">
					    <span class="demonstration">开始时间</span>
					    
					    <el-date-picker
					      v-model="date1"
					      format="MM-dd-yyyy"
					      type="date"
					      placeholder="选择日期"
					      change="date1"
					      @change="dateChange"
					      >
					    </el-date-picker>
					</div>
					  
				</li>
				<li>
					<div class="block">
					    <span class="demonstration">结束时间</span>
					    <el-date-picker
					      v-model="date2"
					      format="MM-dd-yyyy"
					      type="date"
					      placeholder="选择日期"
					      @change="dateChange"
					      >
					    </el-date-picker>
					</div>
					  
				</li>
				<li>{{uid}}总充值金额： {{balance}} 元</li>
				<li>直接发展的玩家充值
				 	<span @click='lookDetail("zjsshow")'>展开</span>
				 	{{subPlayer}} 元
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
					<div>
						<el-row :gutter="0" type='flex' class="heard_title" v-for="item in zjPaydata"  justify='space-between' align='middle'>
						  <el-col :span="6"  justify='center' align='middle'>
							  <div class="grid-content bg-purple">
							  	{{item.id}}
							  </div>
						  </el-col>
						  <el-col :span="6"  justify='center' align='middle'>
							  	<div class="grid-content bg-purple-light">
							  		{{item.cash}}
							  	</div>
						  </el-col>
						  <el-col :span="6"  justify='center' align='middle'>
							  <div class="grid-content bg-purple">
							  	详情
							  </div>
						  </el-col>
						</el-row>
					</div>
				</div>
				<li>
					下级代理玩家充值 {{subDealer}} 元
					<span @click='lookDetail("xjdlshwo")'>展开</span>
				</li>
				<div  class="details" v-if='xjdlshwo'>
				 	<el-row :gutter="0" type='flex' class="heard_title" justify='space-between' align='middle'>
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
					<div>
						<el-row :gutter="0" type='flex' class="heard_title" v-for="item in xjPaydata"  justify='space-between' align='middle'>
						  <el-col :span="6"  justify='center' align='middle'>
							  <div class="grid-content bg-purple">
							  	{{item.id}}
							  </div>
						  </el-col>
						  <el-col :span="6"  justify='center' align='middle'>
							  	<div class="grid-content bg-purple-light">
							  		{{item.cash}}
							  	</div>
						  </el-col>
						  <el-col :span="6"  justify='center' align='middle'>
							  <div class="grid-content bg-purple">
							  	详情
							  </div>
						  </el-col>
						</el-row>
					</div>
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
					<div>
						<el-row :gutter="0" type='flex' class="heard_title" v-for="item in selfPaydata"  justify='space-between' align='middle'>
						  <el-col :span="6"  justify='center' align='middle'>
							  <div class="grid-content bg-purple">
							  	{{item.id}}
							  </div>
						  </el-col>
						  <el-col :span="6"  justify='center' align='middle'>
							  	<div class="grid-content bg-purple-light">
							  		{{item.cash}}
							  	</div>
						  </el-col>
						  <el-col :span="6"  justify='center' align='middle'>
							  <div class="grid-content bg-purple">
							  	详情
							  </div>
						  </el-col>
						</el-row>
					</div>
				</div>
				<router-link to="/changepswd" tag="li">修改密码</router-link>
				<li>退出</li>
			</ul>
		</div>
	</div>
</template>

<script>
import util from '../../common/util'
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
		zjsshow:false,
		xjdlshwo:false,
		myshow:false,
		page:'0',
		pageSize:'10',
		zjPaydata:[],
		xjPaydata:[],
		selfPaydata:[],
		date1:'',
		date2:''
    }
  },
   beforeCreate:function(){
  	 userdata=JSON.parse(sessionStorage.getItem('userdata'))
  },
  methods: {
  	dateChange (value){
  		value=value.replace(/-/g,'/')
  		console.log(this.date1)
  		console.log(this.date2)
  	},
  	FormatDate (strTime) {
	    var date = new Date(strTime);
	    // return util.formatDate.format(new Date(date), 'yyyy-MM-dd');
	    return (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
	},
  	CheckList (target) {
  		// let url='';
  		// switch(target){
  		// 	case 'zjsshow':
  		// 	url=
  		// 	break;
  		// 	case 'xjdlshwo':
  		// 	url=
  		// 	break;
  		// 	case 'myshow':
  		// 	url=
  		// 	break;
  		// }
  		if(this.date1==''){
  			this.$message({
	            type: 'info',
	            message: '查询开始时间不能为空'
	        });
  		}else if(this.date2==''){
  			this.$message({
	            type: 'info',
	            message: '查询结束时间不能为空'
	        });
  		}else if(this.date1>this.date2){
  			this.$message({
	            type: 'info',
	            message: '查询开始时间不能大于结束时间'
	        });
  		}else{
	  		const that=this;	
	  		console.log(this.FormatDate(new Date(that.date1)))
	  		this.axios.get(this.$api.paylooks, {
			    params: {
				    account:that.account,
					start:this.FormatDate(new Date(that.date1)),
					end:this.FormatDate(new Date(that.date2)),
					page:that.page,
					pageSize:that.pageSize
			    },
			  })
			  .then(function (res) {
			    if(res.data.code==1){
			    	console.log(that.zjPaydata)
			    	console.log(res.data.data)
		  			that.zjPaydata=res.data.data
		  			console.log(that.zjPaydata)
			    }else{
			    	alert(res.data.msg)
			    }
			  })
			  .catch(function (response) {
			    console.log(response);
			  });
  		}
  	},
  	lookDetail (target) {
  		switch(target){
  			case 'zjsshow':
  			this.zjsshow=!this.zjsshow
  			this.zjsshow?this.CheckList():''
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