//必须存在，配置不同环境下的api接口地址
export const __URL__ = {
	DEVELOP:'http://172.23.164.233',
	TESTING:'http://172.23.164.233',
	PRODUCTION:'http://172.23.164.233'
};
/*
 * 获取商品列表接口
 * 请求参数： supplierId  //供应商ID
 *        currentPage		//当前页
 *        pageSize           //每页显示记录数

 */
export const list = {
	url: 'AppStore/product/list',
	method: 'GET',
	auth: false
};
/*
 * 获取商品明细接口
 * 请求参数：id		//产品id
 */
export const detail = {
	url: 'AppStore/product/detail',
	method: 'GET',
	auth: false
};
/*
 * 获取商品详情接口
 * 请求参数：id		//产品id
 */
export const getkey2 = {
		url: 'AppStore/product/detail/key2',
		method: 'GET',
		auth: false
	};
/*
 * 获取产品经典案例接口
 * 请求参数：id		//产品id
 */
export const getkey3 = {
		url: 'AppStore/product/detail/key3',
		method: 'GET',
		auth: false
	};

