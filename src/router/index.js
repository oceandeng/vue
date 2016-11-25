//router modules
import Index from '../view/index.vue';
import Login from '../view/test/login.vue';

//维护的子组件列表
import product from './product';
import cart from './cart';
import order from './order';
import service from './service';


//路由配置
const routes = [
	//默认页
	{
		path: '/index',
		component: Index,
		children: [].concat(
			product,
			cart,
			order,
			service
		),
		meta: {
			auth: true
		}

	},
	//登录页
	{
		path: '/login',
		component: Login,
	},
	//首页跳转
	{
		path: '/',
		redirect: '/index'
	}
];

export default routes;