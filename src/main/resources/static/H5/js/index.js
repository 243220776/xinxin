(function(){
	init();
})();

function init(){
	var params = location.search;
	mui.ajax({
		url:"/qq/authQQ",
		data:{"code":params},
		dataType:'text',
		success:function(data){
			console.log(data+"：成功");
		}
	})
}