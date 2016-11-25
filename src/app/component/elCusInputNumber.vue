<template>
	<div class="elInputNum">
		<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
	</div>
</template>
<script>
	export default{
		name: 'el-cus-input-number',
		data(){
			return {
				num1: 1
			}
		},
		methods: {
			handleChange(evt) {
				this.$emit('change', evt);
			}
		},
	}
</script>
<style>
	.elInputNum, .elInputNum .el-input-number{
		width: 120px;
	}
	.elInputNum .el-input__inner{
		border-radius: 0;
		margin-left: 29px;
		height: 28px !important;
		border: 1px solid #ccc;
		padding: 3px 65px 3px 15px;
	}
	.elInputNum .el-input-number__decrease{
		width: 28px;
		height: 28px;
		line-height: 28px;
		right: 90px;
		font-size: 12px;
		border: 1px solid #ccc;
		top: 0;
		box-sizing: border-box;
	}
	.elInputNum .el-input-number__increase{
		width: 28px;
		height: 28px;
		line-height: 28px;
		font-size: 12px;
		border: 1px solid #ccc;
		top: 0;
		box-sizing: border-box;
	}
</style>