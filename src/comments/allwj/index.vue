<template>
	<div class="players_cont">
		<div class="header_nav">
			<mt-header title="【直接玩家】" class="bar-nav">
				<router-link :to="{ path: '/center'}" replace slot="left" >
				    <mt-button icon="back">返回</mt-button>
				</router-link>
			  <!-- <mt-button slot="right" size="normal" type="primary"  plain @click="MenuType"> 
					菜单
			  </mt-button> -->
			</mt-header>
		</div>
		<!-- <div class="hearder_2">
			<div>
				代理 我充值:
				<span>{{paymoney}}</span>元
			</div>
		</div> -->
		<div class="cent_action">
			<ul>
				<li>当前位置: {{userid}} [直接玩家列表] 首页</li>
			</ul>
			<div class="list_wrap">
				<ul>
					<li >
						<figure>
						  <figcaption>头像</figcaption>
						  <figcaption>昵称</figcaption>
						</figure>
						<div>
							金币
						</div>
					</li>
					<li  v-for="(item,index) in dataList" v-if="dataList.length>0">
						<figure>
						  <img :src=item.headIcon alt="The Pulpit Rock">
						  <figcaption>{{item.nickName}}</figcaption>
						</figure>
						<div>
							{{item.goldNumber}}
						</div>
					</li>
					<li v-if="dataList.length==0">
					  <p>
					  	暂无数据
					  </p>
					</li>
				</ul>
			</div>
		</div>
		<div class="page_btn">
			<el-pagination
			  middle
			  layout="prev, pager, next"
			  :page-size="pageSize"
			  :total="total" @current-change="handleCurrentChange">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import { Field,Header,Button,Popup,Cell,Toast } from 'mint-ui';
import { getPlayerList } from '../../config/api';
export default {
  data () {
    return {
    	dataList:[
	     
	  ],
      userid: '123',
      paymoney:'111',
      zhijiewanjia:'111',
      xiajidaili:'2222',
      jinrichongzhi:'111111',
      total: 0,
	  page: 1,
	  pageSize: 20
    }
  },
  created:function(){
  	console.log(getPlayerList)
  	 this.GetgamePlayers()
  },
  components:{
  	'mt-field':Field,
  	'mt-header':Header,
  	'mt-popup':Popup,
  	'mt-cell':Cell,
  	'mt-button':Button
  },
  methods: {
  	GetgamePlayers () {		
  		let para = {
			page: this.page,
			pageSize:this.pageSize
		};
		let personData={
			uid:100001
		}
		const _this=this;
		getPlayerList(para).then((result) => {
			console.log(result)
			console.log(_this)
			_this.dataList=result.data.content
			_this.total = result.data.totalElements;

		}).catch(error=> {
          	Toast({
			  message: '获取数据失败',
			  position: 'center',
			  duration: 500
			});
        });
		console.log(2)
  		// this.axios.get(this.$api.getSubPlayer)
		  // .then(function (res) {
		  //   if(res.data.code==1){
	   //  	// 	that.$router.push({path:"/center",params:{
	  	// 		// 	uid:res.data.data.uid,
	  	// 		// 	balance:res.data.data.balance,
	  	// 		// 	role:res.data.data.role,
	  	// 		// 	subDealer:res.data.data.subDealer,
	  	// 		// 	dailyCashCount:res.data.data.dailyCashCount,
    // 		// 		subPlayer:res.data.data.subPlayer,
	  	// 		// 	account:res.data.data.account
	  	// 		// }})\
	  	// 		console.log(res)
	  	// 		// const userdata={
	  	// 		// 	uid:res.data.data.uid,
	  	// 		// 	balance:res.data.data.balance,
	  	// 		// 	role:res.data.data.role,
	  	// 		// 	subDealer:res.data.data.subDealer,
	  	// 		// 	dailyCashCount:res.data.data.dailyCashCount,
    // 		// 		subPlayer:res.data.data.subPlayer,
    // 		// 		password:that.password,
	  	// 		// 	account:res.data.data.account
	  	// 		// }
	   //  	// 	sessionStorage.setItem('userdata',JSON.stringify(userdata))
		  //   }else{
		  //   	Toast({
				//   message: res.data.msg,
				//   position: 'center',
				//   duration: 500
				// });
		  //   }
		  // })
		  // .catch(function (response) {
		  //   console.log(response);
		  // });
  	},
  	handleCurrentChange(val) {
	    console.log(`当前页: ${val}`);
	    this.page=val
	    this.GetgamePlayers()
	}
  }
}
</script>

<style>
.players_cont{
	height: 100%;
	width: 100%;
	display: flex;
    flex-direction: column;
	background: #efeff4;
}
.players_cont .hearder_2{
	padding: 4px 10px;
}
.players_cont .hearder_2{
	padding-top: .95rem ;
}
.players_cont .hearder_2 div{
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
.players_cont .cent_action{
	background: #fff;
}
.players_cont .cent_action ul li{
    display: inline-flex;
	width: 90%;
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
.list_wrap ul li img{
	width: 50px;
	height: 50px;
}
.list_wrap ul li figcaption{
	margin-left: 25px;
}
.cent_action{
	width: 100%;
	/*padding: 10px;*/

}

</style>