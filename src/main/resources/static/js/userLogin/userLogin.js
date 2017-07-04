$(function(){
	
	init();
	bindEvent();
});

function init(){

}
function bindEvent(){
	$("#login").bind('click',function(){
		goLogin();
	});
	
}

function goLogin(){
	var name=$("#username").val();
	var pwd=$("#password").val();
	
	$.ajax({
		url:"/auth/doLogin",
		data:{loginName:name,pwd:pwd},
		type:'post',
		dataType:'json',
		success:function(data){
			if(data.code==0){
				window.location.href='/user/goUserInfo';
			}else{
				showView(data.msg);
			}
		}
	})
}