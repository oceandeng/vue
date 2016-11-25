//必须存在，配置不同环境下的api接口地址
export const __URL__ = {
	DEVELOP:'http://172.23.164.6:8080',
	TESTING:'http://testing.baidu.com',
	PRODUCTION:'http://production.baidu.com'
};

export const api2 = {
	url: 'OnlineDWSClient/webInfo/list',
	method: 'GET',
	auth: false
};


export const api3 = {
	url: 'menu',
	method: 'GET',
	auth: false
};

