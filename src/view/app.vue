<template>
	<transition name="fade" mode="out-in">
		<router-view class="view"></router-view>
	</transition>
</template>
<script>
	import 'element-ui/lib/theme-default/index.css'
	import '../assets/styles/normalize.css'
	import '../assets/styles/normalize.css'
	import '../assets/styles/shortcut.css'
	import '../assets/styles/common.css'
	import '../assets/styles/ui-custom.css'
</script>
<style>
	.fade-enter-active, .fade-leave-active{
		transition: all .2s ease;
	}
	.fade-enter, .fade-leave-active{
		opacity :0;
	}
</style>