<template>
	<div class="con-wrap">
		<table class="cart-tit">
			<th width="778px">产品名称</th>
			<th width="120px">单价</th>
			<th width="120px">数量</th>
			<th width="120px">金额</th>
		</table>
		<div class="table-con">
			<div class="table-tit">确认订单信息</div>
			<el-table :data="tableData" style="width:100%; overflow: hidden;" :border="false" :show-header="false">
	            <el-table-column inline-template width="778px">
	                <div align="left">
	                    <figure class="good-info clearfix">
	                        <img src="../../../temp/list-img.jpg" alt="">
	                        <good-detail></good-detail>
	                    </figure>
	                </div>
	            </el-table-column>
	            <el-table-column inline-template width="120px">
	                <div><span class="g-price">{{ row.name }}</span></div>
	            </el-table-column>
	            <el-table-column inline-template width="120px">
					<div>
						11
					</div>
	            </el-table-column>
	            <el-table-column inline-template width="120px">
					<div>
						<span class="orange">¥1200</span>
					</div>
	            </el-table-column>
	        </el-table>
		</div>
		<div class="confirm-info clearfix">
			<div class="right">
				<div class="info-line">
					<span>应付金额：</span>
					<span class="price">¥2400.00</span>
				</div>
				<div id="cartPage" class="info-line">
					<el-checkbox v-model="checked" checked>我同意并已读《中企动力服务协议》</el-checkbox>
				</div>
				<div class="info-line but-group clearfix">
					<div class="f-button fc999 go-cart" @click="goCart">返回购物车</div>
					<div class="commit-btn right">提交订单</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import goodDetail from './private-component/goodInfo'
    import elCusButton from '../../app/component/elCusButton'

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
			goodDetail
		},
		methods: {
			goCart(){
				console.log('goCart');
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
	.table-tit{
		height: 44px;
		line-height: 44px;
		border: 1px solid #ccc;
		margin-top: 20px;
		margin-bottom: -1px;
		padding: 0 20px;
		box-sizing: border-box;
	}
	.confirm-info{
		padding: 20px;
		background: #f0f0f0;
	}
	.confirm-info .info-line{
		margin: 10px 0;
	}
	.commit-btn{
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #fff;
		background: #f40;
		font-size: 18px;
		width: 160px;
		cursor: pointer;
	}
	.but-group{
		position: relative;
	}
	.go-cart{
		position: absolute;
		bottom: 0;

	}
</style>