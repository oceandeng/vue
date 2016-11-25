//组件
import ServiceList from '../view/service/ServiceList.vue';
import ServiceView from '../view/service/ServiceView.vue';
import Default from '../view/test/default-test.vue';

export default [{
	path: '',
	component: Default
}, {
	name: 'ServiceList',
	path: 'ServiceList',
	component: ServiceList
}, {
	name: 'ServiceView',
	path: 'ServiceView/orderId/:orderId/designerId/:designerId',
	component: ServiceView
}]