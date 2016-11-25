//组件
import cartIndex from '../view/cart/index.vue'
import goodDetail from '../view/cart/goodDetail'
import cart from '../view/cart/cart'
import confirmOrder from '../view/cart/confirmOrder'
import paySuccess from '../view/cart/paySuccess'

export default [{
		name: 'cartIndex',
		path: 'cartIndex',
		component: cartIndex
	},
	{
		name: 'goodDetail',
		path: 'goodDetail',
		component: goodDetail
	},
	{
		name: 'cart',
		path: 'cart',
		component: cart
	},
	{
		name: 'confirmOrder',
		path: 'confirmOrder',
		component: confirmOrder
	},
	{
		name: 'paySuccess',
		path: 'paySuccess',
		component: paySuccess	
	}
]