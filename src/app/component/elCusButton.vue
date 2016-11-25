<template>
	<div class="button" @click="handleClick">
		<slot></slot>
	</div>
</template>
<script>
export default{
	name: 'el-cus-button',
	data(){
		return {

		}
	},
	props: ['color', 'fcolor'],
	methods: {
		handleClick(evt) {
			this.$emit('click', evt);
		}
	},
	mounted(){
		this.$el.style.background = this.color
		this.$el.style.color = this.fcolor;
	}
}
</script>
<style>
	.button{
		width: 106px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		color: #fff;
		font-size: 14px;
		border-radius: 3px;
		margin: 0 0 10px 0;
		cursor: pointer;
	}
</style>