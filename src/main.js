//入口文件
import Vue from 'vue';
import App from './view/app';
import store from './app/store';
import router from './app/router';
import './app/directive';
import './app/filter';
import './app/resource';
import './app/ui';

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})