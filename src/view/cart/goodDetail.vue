<template>
	<div class="con-wrap">
		<div class="good-info clearfix">
			<div class="good-img"><img src="../../../temp/good-b-img.jpg" alt=""></div>
			<div class="good-con">
				<good-detail></good-detail>
				<div class="item-line">
					<span class="thr-tit">价格：</span>
					<span class="price">¥1200</span>
				</div>
				<div class="item-line">
					<span class="thr-tit">数量：</span>
					<el-cus-input-number @change="handleChange"></el-cus-input-number>
				</div>
				<div class="item-line clearfix">
					<div class="left mr10"><el-cus-button color="#ff5000" @click="buyNow()">立即购买</el-cus-button></div>
					<div class="left"><el-cus-button color="#ff9402" @click="addToCart()">加入购物车</el-cus-button></div>
				</div>
			</div>
		</div>
		
		<div id="detailCon" class="detail-con">
			<el-tabs type="border-card" @tab-click="handleClick" @tab-remove="handleRemove">
				<el-tab-pane label="产品详情">
					<detail-tab></detail-tab>
				</el-tab-pane>
				<el-tab-pane label="经典案例">
					<case-tab></case-tab>
				</el-tab-pane>
			</el-tabs>
		</div>
		
	</div>
</template>
<script>
	import goodDetail from './private-component/goodInfo'
    import elCusButton from '../../app/component/elCusButton'
    import elCusInputNumber from '../../app/component/elCusInputNumber'
    import detailTab from './private-component/detailTab'
    import caseTab from './private-component/caseTab'
    
	export default {
		data(){
			return {
			}
		},
		methods: {
			handleChange(value){
console.log(value)

			},
			buyNow(){
				console.log('a')

			},
			addToCart(){
				console.log('b')

			},
			handleRemove(tab) {
				console.log(tab);

			},
			handleClick(tab, event) {
				console.log(tab, event);

			}
		},
		components: {
            goodDetail,
            elCusButton,
            elCusInputNumber,
            detailTab,
            caseTab
		}
	}
</script>
<style scoped>
	.good-info{
		padding: 20px 0;
	}
	.good-img{
		float: left;
	}
	.good-con{
		float: left;
		padding: 10px 20px;
	}
	.thr-tit{
		font-size: 12px;
		color: #666;
	}
	.item-line{
		margin: 10px 0;
		position: relative;
		min-height: 40px;
	}
	#elInputNum{
		position: absolute;
		left: 40px;
		top: 0;
	}
	#detailCon{
		padding: 0 0 30px 0;
	}
</style>
<style>
	#detailCon .el-tabs{
		width: 100%;
	}
	#detailCon .is-active{
		border-top: 3px solid #0085d0;
		margin-top: -1px;
	}
	#detailCon .el-tabs__content{
		min-height: 300px;
	}
</style>
