<template>
	<div id="cartPage" class="con-wrap">
		<table class="cart-tit">
			<th width="80px"><el-checkbox v-model="checked" checked>全选</el-checkbox></th>
			<th width="520px">产品信息</th>
			<th width="100px">单价</th>
			<th width="240px">数量</th>
			<th width="100px">金额</th>
			<th width="100px">操作</th>
		</table>
		<div class="table-con" v-if="!noGood">
			<el-table :data="tableData" style="width:100%; overflow: hidden;" :border="false" :show-header="false">
				<el-table-column inline-template width="80px">
					<div>
						<el-checkbox v-model="checked" checked></el-checkbox>
					</div>
	            </el-table-column>
	            <el-table-column inline-template width="520px">
	                <div align="left">
	                    <figure class="good-info clearfix">
	                        <img src="../../../temp/list-img.jpg" alt="">
	                        <good-detail></good-detail>
	                    </figure>
	                </div>
	            </el-table-column>
	            <el-table-column inline-template width="100px">
	                <div><span class="g-price">{{ row.name }}</span></div>
	            </el-table-column>
	            <el-table-column inline-template width="240px">
					<div>
						<el-cus-input-number @change="handleChange"></el-cus-input-number>
					</div>
	            </el-table-column>
	            <el-table-column inline-template width="100px">
					<div>
						<span class="orange">¥1200</span>
					</div>
	            </el-table-column>
	            <el-table-column inline-template width="100px">
					<div>
						<div class="f-button" @click="deleteFn($index)">删除</div>
	                </div>
	            </el-table-column>
	        </el-table>
		</div>
		<div class="no-good box-center" v-if="noGood">
			<div class="clearfix">
				<img src="../../assets/images/no-good.jpg" alt="">
				您的购物车空空
			</div>
		</div>
		<div class="statements-bar clearfix">
			<div class="all-select left">
				<el-checkbox v-model="checked" checked>全选</el-checkbox>
			</div>
			<div class="f-button left ml20" @click="deleteFn($index)">删除</div>
			<div class="statements-btn right cus-disabled">结算</div>
			<div class="statements-info right">
					<span>已选商品 <span class="orange f18">2</span> 件</span>
					<span class="ml20 mr10">合计：<span class="price">¥2400</span></span>
			</div>
		</div>
	</div>
</template>
<script>
    import goodDetail from './private-component/goodInfo'
    import elCusButton from '../../app/component/elCusButton'
    import elCusInputNumber from '../../app/component/elCusInputNumber'

	export default{
		data() {
			return {
				checked: true,
                tableData: [{
	                date: 'H5企业秀',
	                name: '¥1200',
	                address: '上海市普陀区金沙江路 1518 弄'
	            }, {
	                date: '2016-05-04',
	                name: '¥1200',
	                address: '上海市普陀区金沙江路 1517 弄'
	            }, {
	                date: '2016-05-01',
	                name: '¥1200',
	                address: '上海市普陀区金沙江路 1519 弄'
	            }],
	            noGood: false
	        }
		},
		components: {
			elCusButton,
			goodDetail,
			elCusInputNumber
		},
		methods: {
			handleChange(value){
console.log(value)

			},
            deleteFn(index) {
console.log(index)

            }

		}
	}
</script>
<style scoped>
	.cart-tit{
		width: 100%;
		background: #f0f0f0;
		height: 32px;
		line-height: 32px;
	}
	.cart-tit th{
		font-size: 12px;
		font-weight: normal;
		padding: 0 10px;
		box-sizing: border-box;
	}
	.table-con{
		padding: 20px 0;
	}

	.el-table, .el-table:before, .el-table:after{
        /*border: none !important;*/
        /*position: static;*/
    }
    #elInputNum{
    	margin-left: 45px;
    }
    .statements-bar{
    	width: 100%;
    	height: 50px;
    	line-height: 50px;
    	background: #f0f0f0;
    	padding: 0 0 0 15px;
    	box-sizing: border-box;
    }
    .statements-btn{
    	width: 120px;
    	height: 50px;
    	line-height: 50px;
    	background: #f40;
    	text-align: center;
    	font-size: 18px;
    	color: #fff;
    	cursor: pointer;
    }
    .no-good{
    	min-height: 300px;
    	text-align: center;
    	line-height: 44px;
    }
    .no-good img{
    	float: left;
    	margin: 0 20px 0 0;
    }
</style>
<style>
	#cartPage .el-checkbox__inner{
		width: 14px;
		height: 14px;
		border-radius: 0;
		border-color: #ccc;
	}
	#cartPage .el-checkbox__inner.is-checked{
		background: #fff;
	}
	#cartPage .el-checkbox__inner::after{
		border-color: #0085d0;
		top: 0;
		left: 3px;
	}
	#cartPage .el-checkbox__label{
		font-weight: normal;
	}
	#cartPage .el-table__body-wrapper{
		overflow: hidden; 
	}
	.good-info{
        padding: 20px 0;
    }
    .good-info img{
        float: left;
        margin: 0 20px 0 0;
    }
    .el-table, .el-table td, .el-table th{
    	border-color: #ccc;
    }
</style>