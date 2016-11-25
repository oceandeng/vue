<template><span>{{t}}</span></template>
<script>


	export default{
		data(){
			return {
				t :this.time||10,
			}
		},
		props:['time','url'],
		created(){
			let timer=setInterval(()=>{
				this.t--;
				if(!this.t){
					sessionStorage.a=11;
					clearInterval(timer);
					this.$router.push(this.url||'/')
				}
			},1000)
		}
	}
</script>

