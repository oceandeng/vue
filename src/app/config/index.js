//全局配置文件
const isProduction = process.env.NODE_ENV === 'production';
const environment = function() {
	switch (window.location.host) {
		case 'localhost':
			return 'TESTING'
		case 'localhost':
			return 'PRODUCTION'
		default:
			return 'DEVELOP'
	}
}


export default {
	ENVIRONMENT: environment(),
	DEBUG: !isProduction
}