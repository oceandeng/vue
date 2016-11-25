import Vue from 'vue';
import Router from 'vue-router';
import logger from '../logger';
import routes from '../../router';
import NotFoundComponent from '../../view/404.vue';


Vue.use(Router);

//检测重复的路径和名称
const compare = (arr, type) => {
	let cache = [];
	arr.forEach(function(v) {
		if (v[type]) {
			let find = cache.indexOf(v[type]);
			cache.push(v[type]);
			~find && logger.warn('检测到重复' + type, cache);
			v.children && compare(v.children, type);
		}
	})
}

compare(routes, 'path');
compare(routes, 'name');

//404
routes.push({
	path: '*',
	component: NotFoundComponent
})

//创建路由
const router = new Router({
	mode: 'history',
	routes: routes
});

//路由钩子
router.beforeEach((to, from, next) => {
	//页面访问认证
	if (to.matched.some(record => record.meta.auth)) {
		if (!sessionStorage.a) {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			})
		} else {
			next();
		}
	} else {
		next();
	}
})

export default router;