import Vue from 'vue';
import VueResource from 'vue-resource';
import CONFIG from '../config';
import apis from '../../api';
import * as types from '../store/mutation-types';
import logger from '../logger';


//处理路由规则使用
//import PathToRegexp from 'path-to-regexp';
import { isObject, sessionStorage } from '../util';

const api = {
	install: function(Vue) {
		Vue.api = Vue.prototype.$api = function(key, params) {

			key = key.split('.');

			const api = apis[key[0]][key[1]];
			const url = apis[key[0]]['__URL__'][CONFIG.ENVIRONMENT];
			const option = {};

			//判断接口是否存在
			if (!isObject(api)) {
				logger.error('API接口错误---' + key);
				return;
			}

			//判断参数类型
			// api.method.toUpperCase() == 'POST' && (option.body = params);
			params && api.method.toUpperCase() == 'POST' ? option.body = params : option.params = params;

			//设置请求类型
			option.method = api.method && api.method.toUpperCase() || 'GET';

			//跨域认证
			option.credentials = true;
			//设置url
			//option.url = CONFIG.APIURL + PathToRegexp.compile(api.url)(params);
			url.charAt(url.length - 1) == '/' ? option.url = url + api.url : option.url = url + '/' + api.url


			// option.headers= {"X-Requested-With": "XMLHttpRequest"};



			//设置认证
			/*			if (api.auth !== false) {
							if (this.$store.state.user.userInfo.token) {
							} else {
								this.$store.commit(types.USER_LOGOUT);
							}
						}*/

			//设置请求超时
			option.timeout = 4000;

			//不支持JSON传输的时候开启
			option.emulateJSON = true;

			//调用$http请求
			if (this.$http) {
				return this.$http(option);
			} else {
				return Vue.http(option);
			}
		}
	}
};



Vue.use(VueResource);
Vue.use(api);

//注册拦截器

Vue.http.interceptors.push((request, next) => {
	next((response) => {
		if (response.ok && response.body.data) {
			if (typeof response.body == 'string') {
				try {
					response.body = JSON.parse(response.body);
				} catch (e) {
					logger.warn('数据转换出现问题!', e);
				}
			};
			if (response.body.status == 101) {
				response.body = response.body.data;
			};
		};
	});
});