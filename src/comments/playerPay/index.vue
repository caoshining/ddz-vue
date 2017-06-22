<template>
	<div class="players_cont">
		<div class="hearder_1">
			<h3>	
				<span>【玩家充值】</span> 
				<span>{{userid}}欢迎你</span>
			</h3>
			
		</div>
		<!-- <div class="hearder_2">
			代理 我充值:
			<span>{{paymoney}}</span>元
		</div> -->
		<div class="cent_action">
			<div>
				当前位置: {{userid}} [玩家充值] 
				首页	
			</div>
			<div>
				<ul>
					<li>
						<el-form ref="form" :model="actionParams" :rules="checkRules" @submit.prevent="onSubmit" style="width:100%;">
							<el-form-item label="玩家Id" prop="userId">
								<el-input v-model="inputUserId"></el-input>
							</el-form-item>
						    <el-form-item label="物品">
						      <el-radio-group v-model="actionParams.itemId">
						        <el-radio :label="10001" checked>房卡</el-radio>
						        <el-radio :label="10002" disabled >金币</el-radio>
						      </el-radio-group>
						    </el-form-item>
							<el-form-item label="数量" >
								<el-input-number v-model="actionParams.number" :min="1"></el-input-number>
							</el-form-item>
							<el-form-item label="备注">
								<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model.trim="actionParams.desc"></el-input>
							</el-form-item>
							<el-form-item>
					      		<el-button type="primary" @click.native.prevent="onSubmit" >确认</el-button>
							</el-form-item>
						</el-form>
					</li>
				</ul>
			</div>
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
      // inputUserId:'',
      actionParams:{
      	userId: '',
      	
      	itemId:10001,
      	number: 0,
      	desc:''
      },
      checkRules:{
            userId:[
                {required:true, message:"请输入玩家id", trigger:'blur'}, 
                // {validator:(rule,value,callback)=>{
                //   if(/^\d+$/.test(value) == false){
                //       callback(new Error("玩家只能输入数字"));
                //   }else{
                //       callback();
                //   }
                // }}
            ]
        },
      num1:0,
      desc:'',
      page:0
    }
  },
  computed:{
      inputUserId:{
        get:function(){
          return this.actionParams.userId;
        },
        set:function(newValue){
            this.actionParams.userId=newValue.replace(/[^\d]/g,'');
        }
      }
    },
  methods: {
  	 methods: {
      handleChange(value) {
        console.log(value);
      }
    },
    onSubmit () {
    	const that=this;	
    	console.log(that.$api.addItem)
  		this.axios.get(this.$api.addItem,{
		    params:that.actionParams
		  })
		  .then(function (res) {
		    if(res.data.code==1){
	  			
	  			that.$message({
	  				type:'success',
	  				message: '充值成功'
	  			})
	  			that.$router.push({path:"/center"})
		    }else{
		    	alert(res.data.msg)
		    }
		  })
		  .catch(function (response) {
		    console.log(response);
		  });
    },
    handleChange (value) {

    },
  	submitAccount () {		
  		this.$http.post('/someUrl', {username:this.page}).then((res) => {
  			res=res.body;
  			if(res.error==0){

  			}
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
	background:#fff;
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