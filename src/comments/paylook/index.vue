<template>
	<div class="paylook_cont">
		<!-- <router-link to="/center" tag="div" class="hearder_1">
			【首页】{{uid}}欢迎你
		</router-link> -->
		<mt-header title="【玩家充值查询】" class="bar-nav">
			<router-link :to="{ path: '/center'}" replace slot="left" >
			    <mt-button icon="back">返回</mt-button>
			</router-link>
		  <!-- <mt-button slot="right" size="normal" type="primary"  plain @click="MenuType"> 
				菜单
		  </mt-button> -->
		</mt-header>
		<!-- <div class="hearder_2">
			<div>
				代理 我充值:
				<span>{{balance}}</span>元
			</div>
		</div> -->
		<div class="cent_action">
			<ul>
				<!-- <li>
					当前位置 {{uid}} [代理] 首页
				</li> -->
				<!-- <mt-cell title="选择开始时间" is-link>
				  <span style="color: green">这里是元素</span>
				</mt-cell> -->
				<li title="选择开始时间" is-link>
					<span class="demonstration">选择开始时间</span>
					<div class="block">					    
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
			  	<li title="选择结束时间" is-link>
			  		<span class="demonstration">选择结束时间</span>
					<div class="block">
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
				<li>
					{{uid}}总充值金额： {{balance}} 元
				</li>
				<li>
				直接发展的玩家充值
				{{subPlayer}} 元
				 	<span @click='lookDetail("zjsshow")'>展开</span>
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
				<!-- <router-link to="/changepswd" tag="li">修改密码</router-link>
				<li>退出</li> -->
			</ul>
		</div>
	</div>
</template>

<script>
import util from '../../common/util'
import { Field,Header,Button,Popup,Cell} from 'mint-ui';
let userdata={};

export default {
  data () {
    return {
		uid:userdata.account,
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
   components:{
  	'mt-field':Field,
  	'mt-header':Header,
  	'mt-popup':Popup,
  	'mt-cell':Cell,
  	'mt-button':Button
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
	background: #efeff4;
}
.paylook_cont .hearder_2{
	padding-top: .95rem ;
}
.paylook_cont .hearder_2 div{
	display: block;
	border: 1px solid #6d6d72;
    overflow: hidden;
    border-radius: 4px;
    padding: 5px;
    background: white;
    color: #6d6d72;
    animation:Roate 1s 1;
    width: fit-content;
}
@keyframes Roate
{
	from {transform:rotateX(0deg);}
	to {transform:rotateX(360deg);}
}

.paylook_cont .cent_action{
    background: #fff;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    /*margin: .75rem 0;*/
    font-size: 0.85rem;
    position: relative;
}
.paylook_cont .cent_action ul{
	padding: 10px 0;
}
.paylook_cont .cent_action ul li{
    box-sizing: border-box;
    padding-left: 0.75rem;
    min-height: 2.2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
    color: #6d6d72;
	margin-top: 8px;
	line-height: 2;
	box-sizing: border-box;
	list-style-type: none;
}
/*.paylook_cont .cent_action ul li{
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
	padding: 8px 12px;
}*/
div.details{
	width: 90%;
    margin-top: 8px;
    padding-left: 4px;
    line-height: 2;
    box-sizing: border-box;
}
</style>