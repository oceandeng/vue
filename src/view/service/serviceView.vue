<template>
	<div class="serviceView">
		<div class="tips-text mt10 mb10 clearfix">
			<span class="fl">温馨提示：</span><span class="fl tips">您的网站处于<em>分配设计师</em>阶段，我们将在一个工作日内为您分配专属设计师！</span>
		</div>
		<div class="bodyHd clearfix">
			<div class="userHd fl">
				<div class="Hd-top"></div>
				<span class="user-attr"><img v-bind:src="designerData.photodata" height="120" width="120" alt=""></span>
				<div class="contact">
					<p><span class="t-left">设计：</span><span class="t-right mr20">{{designerData.name}}</span><span class="t-left">QQ：</span><span class="t-right">{{designerData.qq}}</span></p>
					<p><span class="t-left">电话：</span><span class="t-right">{{designerData.tel}}</span></p>
					<p><span class="t-left">邮箱：</span><span class="t-right">{{designerData.email}}</span></p>
				</div>
			</div>
			<div class="cm-state clearfix fr">
				<ul class="cm-state-item clearfix" v-for="(item,i) in Data.node" v-bind:class="['estart','active','passed'][item.orders==3&&item.status==2?1:item.status]">
					<li class="cm-itemL" v-if="item.status==0">
						{{item.orders}}.{{item.nodeName}}
						<i class="arrow"></i>
					</li>
					<li class="cm-itemL" v-if="item.status==1">
						{{item.orders}}.{{item.nodeName}}
						<i class="arrow"></i>
					</li>
					<li class="cm-itemL" v-if="item.status==2">
						<div v-if="item.orders == 3">
							{{item.orders}}.{{item.nodeName}}
						</div>
						<div class="fl cm-itemL-date" v-if="item.orders !=3">
							<span>16日</span>
							<i>2016年06月</i>
						</div>
						<div class="fr cm-itemL-ts" v-if="item.orders !=3">
							<span>{{item.orders}}.{{item.nodeName}}</span>
							<i>[已完成]</i>
						</div>
						<i class="arrow"></i>
					</li>
					<li class="cm-itemR clearfix">
						<i class="sicon" v-if="item.orders !=3"></i>
						<div class="setps" v-if="item.status==1 || item.orders ==3">
							<div class="setpTips" v-bind:class="'setpTips'+item.childNodeIns.length+'-'+ordersNum" v-for="itemChinld in item.childNodeIns" v-if="itemChinld.status==2 && itemChinld.orders == ordersNum && itemChinld.orders !=3">
									<div class="s-tip clearfix" >
			                    	<div class="sicon s-tipL"></div><div class="sicon s-tipC">{{itemChinld.comentTemplateDoing}}</div><div class="sicon s-tipR"></div>
								</div><em class="sicon s-arrow"></em>


							</div>
							<div class="progress-bar sicon setp" v-bind:class="['setp'+item.childNodeIns.length,'setp'+item.childNodeIns.length+'-'+ordersNum+'']">
								<div class="spot" v-for="itemChinld in item.childNodeIns">
									<p class="spot-text">{{itemChinld.nodeName}}</p>
									<p class="spot-text">{{itemChinld.copleteTime}}</p>
								</div>
							</div>
						</div>
						<span class="fl" v-if="item.status==0">{{item.comentTemplateWait}}</span>
						<span class="fl" v-if="item.status==2 && item.orders !=3">{{item.comentTemplateFinish}}</span>
						<a href="javascript:;" @click="viewBtns" class="view-btns sicon" v-if="item.status==2 && item.orders != 3">查看</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="coupens mt10 clearfix" v-if="lengthNum == 3 &&statusNum >= 1 &&ordersNum >=2">
			<div class="preview">
				<div class="title">服务验收预览</div>
				<div class="titleCont mt10 mb20">您好，您的设计服务已经完成，请进行设计预览和验收确认</div>
				<div class="contents clearfix">
					<img src="../../assets/images/xiu_icon.jpg" alt="" width="110" height="110" class="fl" @click="views">
					<div class="fl clearfix ml20">
						<p>点击图标进入秀场</p>
						<el-cus-button @click="preview" v-bind:class="lengthNum == 3 && ordersNum==3?'disabled':'enabled'">验收确认</el-cus-button>
					</div>
				</div>
			</div>
			<div class="evaluate">
				<div class="title">客户评价</div>
				<div class="titleCont mt10 mb20">验收确认后方可进行客户评价</div>
				<div class="contents">
					<div class="itmeds">
						<span>服务态度</span>
						<el-rate v-model="service"></el-rate>
					</div>
					<div class="itmeds">
						<span>设计水平</span>
						<el-rate v-model="designLevel"></el-rate>
					</div>
					<div class="itmeds">
						<span>制作周期</span>
						<el-rate v-model="makeCycle"></el-rate>
					</div>
					<el-cus-button @click="evaluate" v-bind:class="CommentInfoDataClass">评价</el-cus-button>
				</div>
			</div>
		</div>
		<div class="demand" v-if="ordersNum == 2">
			1
		</div>

	</div>
</template>

<script>

  import elCusButton from '../../app/component/elCusButton';

  export default {
    data() {
      return {
        designerData: [],
        Data: [],
        confirmData: [],
        CommentInfoData: [],
        CommentInfoDataClass:'disabled',
        ViewUrl:'',
        ordersNum: '',
        lengthNum: '',
        statusNum: '',
        TstatusNum: '',
        service: null,
        designLevel: null,
        makeCycle: null
      }
    },
    components: {
        elCusButton
    },
    mounted: function() {

    	this.$api('service.designer',{id:this.$route.params.designerId}).then(function(response){
	        this.designerData = response.body.data.info;
	    })
	    this.$api('service.detail',{orderCode:this.$route.params.orderId}).then(function(response){
	        this.Data = response.body.data;


	        for (var datas in this.Data.node) {
	        	var thischildNodeIns=this.Data.node[datas].childNodeIns;

        		this.lengthNum = thischildNodeIns.length;
        		this.statusNum = this.Data.node[2].status;

	        	for(var i=0;i<thischildNodeIns.length;i++){
	        		if(thischildNodeIns[i].status!=2){
	        			this.ordersNum=thischildNodeIns[i].orders-1;
	        			return;
	        		};
	        		if (this.Data.node[2].orders == 3) {
	        			this.ordersNum=3;
	        		}else{
	        			this.ordersNum=0;
	        		};
	        	}
	        };
	        if (this.Data.node.status == 0) {
	        	this.classId = '1';
	        };

	        if (this.Data.node[2].status == 2) {
	        	this.$api('service.CommentInfo',{orderCode:this.$route.params.orderId}).then(function(response){
			        this.CommentInfoData = response.body.data;
			        if(this.CommentInfoData != null){
			        	this.service = this.CommentInfoData.info.service;
				        this.designLevel = this.CommentInfoData.info.designLevel;
				        this.makeCycle = this.CommentInfoData.info.makeCycle;
				        this.CommentInfoDataClass='disabled'
			        }
			    })
	        };


	    })
    },
    methods: {
    	views() {
    		window.open(this.ViewUrl);
    	},
    	preview() {
    		this.Data.node[2].status=2;
    		this.Data.node[2].childNodeIns[2].status=2;
    		for (var datas in this.Data.node) {
	        	var thischildNodeIns=this.Data.node[datas].childNodeIns;

        		this.lengthNum = thischildNodeIns.length;

	        	for(var i=0;i<thischildNodeIns.length;i++){
	        		if(thischildNodeIns[i].status!=2){
	        			this.ordersNum=thischildNodeIns[i].orders-1;
	        			return;
	        		}
	        		if (this.Data.node[2].orders == 3) {
	        			this.ordersNum=3;
	        		}else{
	        			this.ordersNum=0;
	        		};
	        	}
	        };

            this.$api('service.confirm',{orderCode:this.$route.params.orderId}).then(function(response){
		        this.confirmData = response.body;

		        this.$api('service.detail',{orderCode:this.$route.params.orderId}).then(function(response){
			        this.Data = response.body.data;

			        for (var datas in this.Data.node) {
			        	var thischildNodeIns=this.Data.node[datas].childNodeIns;

		        		this.lengthNum = thischildNodeIns.length;

			        	for(var i=0;i<thischildNodeIns.length;i++){
			        		if(thischildNodeIns[i].status!=2){
			        			this.ordersNum=thischildNodeIns[i].orders-1;
			        			return;
			        		}
			        		if (this.Data.node[2].orders == 3) {
			        			this.ordersNum=3;
			        		}else{
			        			this.ordersNum=0;
			        		};
			        	}
			        };
			        if (this.Data.node.status == 0) {
			        	this.classId = '1';
			        };
			    });

		        this.$api('service.prieview',{orderCode:this.$route.params.orderId}).then(function(response){
		        	this.viewData = response.body;
		        	this.ViewUrl = this.viewData.data.url;
		    	});

		    	this.CommentInfoDataClass='enabled';

		    });
        },
        evaluate() {
        	if (this.service != '' && this.designLevel != '' && this.makeCycle !='') {
        		this.$api('service.CommentAdd',{orderCode:this.$route.params.orderId,service:this.service,designlevel:this.designLevel,makecycle:this.makeCycle}).then(function(response){
			        this.CommentAddData = response.body;
			        this.CommentInfoDataClass='disabled';
			    })
        	}else{
        		return;
        	};
        },
        viewBtns(){

        }
    }
  }
</script>
<style type="text/css" media="screen">
	.serviceView{
		width: 1142px;
		margin: auto;
		padding: 20px 0;
	}
	.tips-text{
	    font-size: 14px;
	    line-height: 30px;
	}
	.tips-text .tips{
	    font-weight: normal;
	    color: #666666;
	}
	.tips-text .tips em{
	    font-style: normal;
	    color: #0085d0;
	    padding: 0 5px;
	}
	.userHd{
	    width: 273px;
	    height: 330px;
	    background-color: #fcfcfc;
	    border:1px solid #e3e3e3;
	}
	.userHd .Hd-top{
	    width: 273px;
	    height: 50px;
	    background: #fcfcfc url(../../assets/images/uerHd_top.png) no-repeat;
	}
	.userHd .user-attr{
	    display: inline-block;
	    width: 120px;
	    height: 120px;
	    padding: 20px 76px 30px 77px;
	}
	.userHd .contact{
	    margin-left: 40px;
	}
	.userHd .contact p{
		padding: 0;
		margin:0;
	    display: block;
	    width: 100%;
	    height: 24px;
	    font-size: 12px;
	    line-height: 24px;
	}
	.userHd .contact span{
	    float: left;
	    display: inline-block;

	}
	.userHd .contact span.t-left{
	    color: #999;
	}
	.userHd .contact span.t-right{
	    color: #666;
	}
	/*进度*/
	.cm-state{
	    width: 855px;
	    height: 332px;
	    overflow: hidden;
	}
	.cm-state .cm-state-item{
		padding: 0;
	    margin:0 ;
	    font-size: 12px;
	}
	.cm-state.all-pass .cm-state-item li{
	    height: 110px;
	}
	.cm-state.all-pass .cm-state-item .cm-itemL .cm-itemL-date{
	    margin-top: 20px;
	}
	.cm-state.all-pass .cm-state-item .cm-itemL .cm-itemL-ts{
	    margin-top: 43px;
	}

	.cm-state.all-pass .cm-state-item .cm-itemR i{
	    margin: 30px 10px;
	}
	.cm-state.all-pass .cm-state-item.estart .cm-itemR span, .cm-state.all-pass .cm-state-item.passed .cm-itemR span{
	    line-height: 110px;
	    height: 110px;
	}
	.cm-state.all-pass  .cm-state-item.passed .cm-itemR .view-btns{
	    margin: 40px 20px;
	    margin-right: 40px;
	    cursor: pointer;
	    display: inline-block;
	    text-decoration: none;
	}

	.cm-state.all-pass .cm-state-item.passed .cm-itemR .comm-btns{
	    margin: 40px 20px;
	    margin-right: -10px;
	}
	.cm-state .cm-state-item {
	    border-bottom: 1px solid #46515e;
	    background-color: #434a54;
	}
	.cm-state .cm-state-item.active{
	    background-color: #434a54;
	}
	.cm-state .cm-state-item li{
	    border-right: 1px solid #46515e;
	    background-color: #363c44;
	    float: left;
	    height: 74px;
	    text-align: center;
	}
	.cm-state .cm-state-item.active li{
	    height: 181px;

	}
	.cm-state .cm-state-item.estart li{
	    line-height: 74px;

	}
	.cm-state-item .cm-itemL{
	    width: 219px;
	    position: relative;
	    font-size: 14px;
	    color: #9da8b2;
	}
	.cm-state .cm-state-item.active .cm-itemL{
	    background: #4b89dc;
	    width: 219px;
	    border:0;
	    color: #fff;
	    font-size: 24px;
	    line-height: 181px;
	    text-align: center;
	    border-left: 1px solid #46515e;
	}
	.cm-state-item .cm-itemL em{
	    color: #fb6b5b;
	    display: inline-block;
	    font-weight: bold;
	    font-style: normal;
	    margin: 0 5px;
	}
	.cm-state .cm-state-item .cm-itemL .arrow {
	    width: 0;
	    height: 0;
	    line-height: 0;
	    font-size: 0;
	    border-top: 12px solid transparent;
	    border-bottom: 12px solid transparent;
	    border-left: 12px solid #4b89dc;
	    position: absolute;
	    z-index: 1;
	    right: -12px;
	    top: 50%;
	    overflow: hidden;
	    margin-top: -6px;
	    display: none;
	}
	.cm-state .cm-state-item .cm-itemL .cm-itemL-date{
	    width: 70px;
	    margin: 0 20px;
	    text-align: left;
	    color: #fff;
	}
	.cm-state .cm-state-item .cm-itemL .cm-itemL-date span{
	    width: 100%;
	    display: inline-block;
	    font-size: 24px;
	    margin-top: 10px;
	}
	.cm-state .cm-state-item .cm-itemL .cm-itemL-date i{
	    font-size: 12px;
	    color: #fff;
	    font-style: normal;
	}

	.cm-state .cm-state-item .cm-itemL .cm-itemL-ts{
	    width: 105px;
	    text-align: left;
	    margin-top: 22px;
	    color: #fff;
	}
	.cm-state .cm-state-item .cm-itemL .cm-itemL-ts span{
	    display: inline-block;
	    width: 100%;
	    font-size: 14px;
	}
	.cm-state .cm-state-item .cm-itemL .cm-itemL-ts i{
	    font-size: 12px;
	    font-style: normal;
	}
	.cm-state .cm-state-item.active .cm-itemL .arrow {
	    display: block !important;
	}
	.cm-state .sicon{
	    background: url(../../assets/images/setp_iocn.png);
	}
	.cm-state .cm-state-item .cm-itemR i{
	    background-position: -550px 0;
	    width: 50px;
	    height: 50px;
	    background-repeat: no-repeat;
	    margin: 12px 10px;
	    float: left;
	    display: none;
	}
	.cm-state .cm-state-item.passed{
		height: 74px;
	}
	.cm-state .cm-state-item.passed .cm-itemR i{
	    display: block !important;
	}

	.cm-state .cm-state-item.passed .cm-itemR .view-btns{
	    background-position: -546px -61px;
	    width: 54px;
	    height: 29px;
	    line-height: 29px;
	    text-align: center;
	    color: #fff;
	    font-size: 12px;
	    display: inline-block;
	    margin: 20px;
	    margin-right: 40px;
	    float: right;
	    text-decoration: none;

	}
	.cm-state .cm-state-item.passed .cm-itemR .comm-btns{
	    background-position: -423px 0;
	    width: 54px;
	    height: 29px;
	    line-height: 29px;
	    text-align: center;
	    color: #fff;
	    font-size: 12px;
	    display: inline-block;
	    margin: 20px;
	    margin-right: -10px;
	    float: right;

	}
	.cm-state-item .cm-itemR {
	    color: #fff;
	    width: 634px;
	    position: relative;
	    overflow:hidden;
	}
	.cm-state-item.estart .cm-itemR span, .cm-state-item.passed .cm-itemR span{
	    line-height: 74px;
	    font-size: 14px;
	    color: #9da8b2;
	    padding-left: 0;
	}
	.cm-state-item.estart .cm-itemR span{
	    padding-left: 30px;
	}

	.progress-bar {
	    margin: 72px;
	}
	.setps .s-tip {
	    text-align: center;
	    height: 31px;
	    line-height: 31px;
	    padding: 0;
	    color: #fff;
	    font-size: 14px;
	    min-width: 90px;
	    white-space: nowrap;
	    vertical-align: middle;
	}
	.s-tip-btn{
	    text-decoration: underline;
	}
	.s-tip-btn:hover{
	    text-decoration: underline;
	}

	.setpTips{
		height: 0px;
		top:30px;
		width: 635px;
		background: white;
		text-align: center;
		position: relative;
	}
	.setpTips2-0{
		display: none;
	}
	.setpTips2-1{
		left: 1%;
	}
	.setpTips3-0{
		display: none;
	}
	.setpTips3-1{
		left: -16.8%;
	}
	.setpTips3-2{
		left: 17.8%;
	}
	.setps .s-tip .s-tipL{
	    background-position: 0 0;
	    width: 9px;
	    height: 31px;
	    overflow:hidden;
	    display: inline-block;
	}
	.setps .s-tip .s-tipC{
	    background-position: 0 -45px;
	    background-repeat: repeat-x;
	    padding: 0 5px;
	    line-height: 31px;
	    height: 31px;
	    overflow:hidden;
	    display: inline-block;
	}
	.setps .s-tip .s-tipC a{
	    color: #12b4ff;
	    display: inline-block;
	    margin-left: 10px;
	}
	.setps .s-tip .s-tipR{
	    background-position: -25px 0;
	    width: 7px;
	    height: 31px;
	    overflow:hidden;
	    display: inline-block;
	}
	.setps  .s-arrow {
	    width: 18px;
	    height: 9px;
	    vertical-align: top;
	    display: inline-block;
	    background-position: -50px 0;
	    overflow: hidden;
	}
	.progress-bar .spot {
	    position: absolute;
	    z-index: 9;
	    left: 10px;
	    top: 120px;
	    width: 160px;
	    height: 40px;
	}
	.progress-bar.setp3 .spot:nth-child(2) {
		left: 38.6%;
	}
	.progress-bar.setp3 .spot:nth-child(3) {
		left: 71.8%;
	}
	.progress-bar.setp2 .spot:nth-child(2) {
		left: 71.8%;
	}

	.progress-bar .spot-text {
	    color: #9da8b2;
	    display: block;
	    line-height: 20px;
	    text-align: center;
	    font-size: 12px;
	    padding: 0;
	    margin:0;
	}
	.progress-bar.setp{
	    height: 36px;
	    width: 480px;
	}
	/*2节点进度条*/
	.progress-bar.setp2-1{
	    background-position: 0 -616px;
	}
	.progress-bar.setp2-2{
	    background-position: 0 -476px;
	}
	/*3节点进度条*/
	.progress-bar.setp3-1{
	    background-position: 0 -102px;
	}
	.progress-bar.setp3-2{
	    background-position: 0 -224px;
	}
	.progress-bar.setp3-3{
	    background-position: 0 -348px;
	}

.coupens{
	border: 1px solid #e3e3e3;
	height: 310px;
}
.coupens>div{
	width: 528px;
	height: 270px;
	padding: 20px;
}
.coupens .title{
	font-size: 18px;
	color: #666666;
}
.coupens .titleCont{
	background-color: #f0f0f0;
	font-size: 12px;
	color: #666666;
	height: 30px;
	line-height: 30px;
	padding-left: 20px;
}
.coupens .contents{
	height: 150px;
}
.coupens .contents .itmeds{
	height: 35px;
	width: 100%;
}
.coupens .contents .itmeds>span{
	font-size: 14px;
	color: #666666;
	float: left;
	margin-right:20px ;
}
.coupens .contents .itmeds .el-rate{
	float: left;
}
.coupens .contents p{
	font-size: 14px;
	color: #666666;
}
.coupens .contents img{
	cursor: pointer;
}
.coupens .contents .disabled{
	outline:0 none;
	cursor:default!important;
	opacity:1;
	filer:alpha(opacity=100);
	pointer-events:none;
	color: #fff;
	background-color: #d7d7d7 !important;
}
.coupens .contents .enabled{
	background-color: #ff5000 !important;
}
.preview{
	border-right: 1px solid #e3e3e3;
	float: left;
}
.evaluate{
	float: right;
}
</style>