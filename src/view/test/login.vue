<template>
	<div>
		<sss time='3' :url="url"></sss>秒后跳转到{{url}}
	</div>
</template>
<script>

	export default{
		created(){
			this.url=this.$route.query.redirect||'/'
		}
	}
</script>