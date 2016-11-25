//必须存在，配置不同环境下的api接口地址
export const __URL__ = {
	DEVELOP:'http://10.12.40.221:8080',
	TESTING:'http://10.12.40.221:8080',
	PRODUCTION:'http://10.12.40.221:8080'
};

export const list = {
	url: 'OnlineDWSClient/webInfo/list',
	method: 'GET',
	auth: false
};

export const detail = {
	url: 'OnlineDWSClient/webInfo/detail',
	method: 'GET',
	auth: false
};

export const designer = {
	url: 'OnlineDWSClient/designer/info',
	method: 'GET',
	auth: false
};

export const demand = {
	url: 'OnlineDWSClient/demand/info',
	method: 'GET',
	auth: false
};

export const CommentInfo = {
	url: 'OnlineDWSClient/custComment/info',
	method: 'GET',
	auth: false
};

export const confirm = {
	url: 'OnlineDWSClient/webInfo/confirm',
	method: 'POST',
	auth: false
};

export const CommentAdd= {
	url: 'OnlineDWSClient/custComment/add',
	method: 'POST',
	auth: false
};

export const prieview = {
	url: 'OnlineDWSClient/webInfo/prieview',
	method: 'GET',
	auth: false
};