/**
 * utils index.js
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-01-04 14:13:47
 */

const Utils = {
	//跨域接口主域名
	crossDomain: 'http://anima_api.sh.wxius.com/v1.0/common',
	//fetch data
	fetch: (options={method: 'GET'}) => {
		var headers = new Headers({
			Accept: 'application/json',
			Authoization: 'Ticket'
		});
		return new Promise((resolve, reject) => {
	    	fetch(Utils.crossDomain + options.url, {
	    		method: options.method || 'GET',
	    		header: headers
	    	}).then((res) => {
				return res.json();
			}).then((json)=>{
				console.info(json);
				//resolve(json);
			}).catch((err)=>{
	            console.error(err);
	        });
	    });
	}
};

export default Utils;
