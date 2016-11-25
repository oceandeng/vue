<template>
	<div class="index">
		<header><h1 class="tc">默认首页</h1></header>
		<router-view class="index-view"></router-view>
		<router-link to="/index/test">切换到test</router-link>
		<router-link to="/index/login">切换到indexLogin</router-link>
		<router-link to="/">切换到首页</router-link>
		<router-link to="/login">切换到login</router-link>
		<router-link :to="{ name: 'test'}">test</router-link>
		<router-link :to="{ name: 'ServiceList'}">服务单列表</router-link>
	</div>
</template>