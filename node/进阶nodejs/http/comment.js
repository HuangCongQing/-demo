var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content': '测试成功才会显示！',
	'cid': 8837           //

})

var options = {
	hostname: "www.imooc.com", //
	port: 80,
	path: '/video/8837',        //
	method: 'POST',
	headers: {	    ///
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Cache-Control':'no-cache',
		'Content-Length':postData.length,      /////
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=d5972b57-a120-4b14-b4b7-1673934b62bd; imooc_isnew_ct=1470292331; PHPSESSID=5ce99ampav59seqlo47mn3t9h6; jwplayer.mute=false; jwplayer.volume=33; loginstate=1; apsid=U5NjcwYTJjNjZiYzdmOTM5YTZmZTQyYTA3N2U5ODIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzI4NDY2OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA3YzFiOWU4MmUzYWJmZGQ0YTY1MmY4ZjhjMGVlN2U2pSKAWKUigFg%3DND; IMCDNS=1; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1484550964; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1487057861; imooc_isnew=2; cvde=57fc96a608ba9-2636',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',     ////
		'Pragma':'no-cache', 
		'Proxy-Connection':'keep-alive',
		'Referer':'http://www.imooc.com/video/8837',    ///
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options,function(res){
		console.log('Status:' +  res.statusCode)
		console.log('headers:' +  JSON.stringify(res.headers))

		res.on('data',function(chunk){
			console.log(Buffer.isBuffer(chunk))
			console.log(typeof chunk)
		})
		res.on('end', function(){
			console.log('评论完毕！！！')
		})

})

req.on('error', function (e) {
	console.log('Error:'+ e.message)
})

req.write(postData)
req.end()

