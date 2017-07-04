
$(function() {
	init();
	bindEvent();
});

function init(){
	getUserName();
}

function bindEvent(){
	
}

function getUserName(){
	$.ajax({
		url:"/auth/getUserName",
		type:'post',
		dataType:'text',
		success:function(data){
			if(data){
				$('#user_info').text("欢迎您："+data);
			}
		}
	})
}
