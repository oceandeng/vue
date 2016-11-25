//订单组件
import orderList from '../view/order/list.vue';
import orderDetail from '../view/order/detail.vue';

export default [{
	name: 'orderList',
	path: 'orderList',
	component: orderList
},{
	name:'orderDetail',
	path: 'orderDetail',
	component: orderDetail
}
]