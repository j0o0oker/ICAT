// 常量配置
var SERVER_HOST = 'http://192.168.0.101';
var SERVER_PORT = '8080';


var j = {};

// ui组件
j.log = function (content) {
	if (typeof content === 'object' || typeof content === Object) {
        console.log(JSON.stringify(content));
        return;
    }
    if (typeof content === Array || typeof content === 'array') {
        console.log(JSON.stringify(content));
        return;
    }
    console.log(content);
}
// ajax
 j.ajax = function (host, dt, callback) {
	// http://localhost:8080/first_dem/demo
	api.ajax({
		url: SERVER_HOST + ":" + SERVER_PORT + "/" + host,
		method: 'get',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
		dataType: 'text',
		data: {
			body: dt
		}
	}, function(ret, err) {
		if (ret) {
			callback(ret, err)
			// api.alert({ msg: JSON.stringify(ret) });
		} else {
			callback(ret, err)
			// api.alert({ msg: JSON.stringify(err) });
		}
	});
 }
var $j = j;
