<template>
<div class="order">
	<div class="frontDiv">
		<el-row :gutter="20">
	  		<el-col :span="6"><div class="grid-content bg-purple"><span>订单号：</span><span>{{num}}</span></div></el-col>
	  		<el-col :span="6"><div class="grid-content bg-purple"><span>订单状态：</span><span class="red">{{state}}</span></div></el-col>
		</el-row>
	</div>
	<div class="mainDiv">
		<div v-if="type==1">
			<div class="hintDiv">该订单会为您保留24小时（从下单之日起算起），24小时之后如果还未付款，系统会自动取消该订单。</div>
			<div>
				<div class="btnDiv">
					<el-cus-button class="btn" color="#ff5000" @click="buyNow($index, row)">立即购买</el-cus-button>
					<div class="btn-down-div"><span class="btn-down-sp">剩余{{hour}}小时{{minute}}分钟</span></div>
				</div>
				<div class="scheduleOuter">
					<div class="scheduleInner">
						<div class="schedule">
							<div class="circle blue"></div><div class="line blue"></div><div class="line"></div><div class="circle"></div><div class="line"></div><div class="line"></div><div class="circle"></div>
						</div>
						<div class="expFont">
							<div class="exp left"><div><span>提交订单</span></div></div>
							<div class="exp center"><span>付款成功</span></div>
							<div class="exp right"><span>服务完成</span></div>
						</div>
						<div class="timeDiv">
							<div class="submitTime"><span>{{submitTime}}</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="type==2">
			<div class="workflow">
				<div class="scheduleOuter">
					<div class="scheduleInner">
						<div class="schedule">
						<div class="circle blue"></div><div class="line blue"></div><div class="line blue"></div><div class="circle blue"></div><div class="line blue"></div><div class="line"></div><div class="circle"></div>
					</div>
					<div class="expFont">
						<div class="exp left"><div><span>提交订单</span></div></div>
						<div class="exp center"><span>付款成功</span></div>
						<div class="exp right"><span>服务完成</span></div>
					</div>
					<div class="timeDiv">
						<div class="submitTime"><span>{{submitTime}}</span></div>
						<div class="payTime"><span>{{payTime}}</span></div>
					</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="type==3">
			<div class="workflow">
				<div class="scheduleOuter">
					<div class="scheduleInner">
						<div class="schedule">
						<div class="circle blue"></div><div class="line blue"></div><div class="line blue"></div><div class="circle blue"></div><div class="line blue"></div><div class="line blue"></div><div class="circle blue"></div>
					</div>
					<div class="expFont">
						<div class="exp left"><div><span>提交订单</span></div></div>
						<div class="exp center"><span>付款成功</span></div>
						<div class="exp right"><span>服务完成</span></div>
					</div>
					<div class="timeDiv">
						<div class="submitTime"><span>{{submitTime}}</span></div>
						<div class="payTime"><span>{{payTime}}</span></div>
						<div class="payTime"><span>{{completeTime}}</span></div>
					</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="type==4">
			<div class="workflow cancel">
				<div class="scheduleOuter">
					<div class="scheduleInner">
						<div class="schedule">
						<div class="circle blue"></div><div class="line blue"></div><div class="line blue"></div><div class="line blue"></div><div class="line blue"></div><div class="circle blue"></div>
					</div>
					<div class="expFont">
						<div class="exp left"><div><span>提交订单</span></div></div>
						<div class="exp right"><span>取消订单</span></div>
					</div>
					<div class="timeDiv">
						<div class="submitTime"><span>{{submitTime}}</span></div>
						<div class="cancelTime"><span>{{cancelTime}}</span></div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="afterDiv" >
		<el-row :gutter="20">
		  <el-col :span="4"><div class="grid-content bg-purple"><span>产品名称：</span><span>{{productName}}</span></div></el-col>
		</el-row>
		<el-row :gutter="20">
		  <el-col :span="4"><div class="grid-content bg-purple"><span>付款方式：</span><span>{{payment}}</span></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"><span>订单总额：</span><span>{{tatol}}</span></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"><span>应付金额：</span><span>{{dealWith}}</span></div></el-col>
		</el-row>
		<el-row :gutter="20">
		  <el-col :span="4"><div class="grid-content bg-purple"><span>发票状态：</span><span>{{billState}}</span></div></el-col>
		</el-row>
	</div>
</div>	
</template>
<script>
	import elCusButton from '../../app/component/elCusButton';

	export default{
		data(){
			return {
				num:"15636987.1456321",
				state:"待付款",
				productName:"H5企业秀",
				payment:"支付宝",
				tatol:"￥2400.00",
				dealWith:"￥2400.00",
				billState:"发票状态",
				type:1,
				hour:5,
				minute:50,
				submitTime:"2016年6月10日 9:00:00",
				payTime:"2016年6月10日 9:00:00",
				completeTime:"2016年6月10日 9:00:00",
				cancelTime:"2016年6月10日 9:00:00",
			}
		},
		props:['time','url'],
		components: {
            elCusButton
        },
		mounted:function(){
		
			console.log(1);
		},
		methods: {
            buyNow(index, row) {
                console.log(index, row);
            }
        },
		created(){
			
		}
	}
</script>
<style>
  .el-row {
    margin-bottom: 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
  	line-height:35px;
    background: none;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<style scoped>
	.frontDiv{
		padding:15px 0px 0px 10px;
	}
	.mainDiv{
		margin:0px 0px;
		border:1px solid #DBDBDB;
		height:163px;
		background-color:#FCFCFC;
		font-size:12px;
	}
	.afterDiv{
		padding:5px 20px 0px 20px;
		background-color:#F0F0F0;
		//margin:0px 20px;
	}
	.hintDiv{
		position: absolute;
		margin:10px 10px;
	}
	.btnDiv{
		float:left;
		width:200px;
		position: absolute;
	}
	.btn-down-div{
		margin:3px 10px 0px 54px;
	}
	.btn{
		margin:50px 50px 0px 50px;
	}
	.btn-down-sp{
	}
	.scheduleOuter{
		float:left;
		position: absolute;
		width: 850px;
		margin: 0px 200px;
	}
	.schedule{
		margin:50px 50px 0px 90px;
		overflow:hidden;
	}
	.circle{
		border-radius:50%;
		border:6px solid #F0F0F0;
		width:10px;
		height:10px;
		float:left;
	}
	.line{
		width:150px;
		height:0px;
		float:left;
		margin:8px 0px;
		border:3px solid #F0F0F0;
	}
	.blue{
		border-color:#2DC17B;
	}
	.expFont{
		margin:8px 0px 0px 50px;
	}
	.left{
		float:left;
		margin-left:26px;
	}
	.center{
		float:left;	
		margin-left:288px;
	}
	.right{
		float:left;
		margin-left:288px;
	}
	.cancel .right{
		float:left;
		margin-left:600px;
	}
	.timeDiv{
		margin:33px 0px 0px 30px;
	}
	.submitTime{
		float: left;
	}
	.payTime{
		float: left;
		margin-left:210px;
	}
	.completeTime{
		float: left;
		margin-left:210px;
	}
	.cancelTime{
		float: left;
		margin-left:520px;
	}
	.order{
		padding:0px 18px;
	}
	.workflow{
		position: absolute;
	}
</style>