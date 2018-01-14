(function(){
	init();
})();

function init(){
	var params = location.search;
	if(params != ''){//暂时先这样，需要加强
		mui.ajax({
			url:"/qq/authQQ",
			data:{"code":params},
			dataType:'text',
			success:function(data){
				console.log(data+"：成功");
			}
		});
	}
	
	$("#myInfo").bind("tap",function(){
		mui.ajax({
			url:"/auth/getUserName",
			type:'post',
			dataType:'text',
			success:function(data){
				if(data){
					window.location.href="/users/user";
				}else{
					window.location.href="/auth/login";
				}
			}
		})
	});
	
	
}