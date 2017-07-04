
(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var html = document.documentElement;
		var windowWidth = html.clientWidth;
		html.style.fontSize = windowWidth / 7.5 + 'px';
		// 等价于html.style.fontSize = windowWidth / 750 * 100 + 'px';
	}, false);
	
	 getQQInfo();
})();

function getQQInfo(){
	
	//从页面收集OpenAPI必要的参数。get_user_info不需要输入参数，因此paras中没有参数
    var paras = {};

    //用JS SDK调用OpenAPI
    QC.api("get_user_info", paras)
        //指定接口访问成功的接收函数，s为成功返回Response对象
        .success(function(s){
            //成功回调，通过s.data获取OpenAPI的返回数据
        	console.log(s.data)
            alert("获取用户信息成功！当前用户昵称为："+s.data.nickname);
        	
        	if (QC.Login.check()) {//判断是否登录
        		QC.Login.getMe(function (openId, accessToken) { //这里可以得到openId和accessToken
        			console.log("openId:"+openId+"   "+"accessToken:"+accessToken);
        			
                });
        	}
        })
        //指定接口访问失败的接收函数，f为失败返回Response对象
        .error(function(f){
            //失败回调
            alert("获取用户信息失败！");
        })
        //指定接口完成请求后的接收函数，c为完成请求返回Response对象
        .complete(function(c){
            //完成请求回调
            alert("获取用户信息完成！");
        });
        
}
