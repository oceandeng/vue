<template>
	<div>404</div>
</template>
<script>
	export default{
		created(){
			this.$api('order.api2').then(function (a) {
				console.log(a)
			})
		}
	}
</script>