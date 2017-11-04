$(function(){
	init();
	bindEvent();
});

function init(){
	getUserInfo();

}
function bindEvent(){
	$("#exit").bind('click',function(){
		logout();
	})
}

function getUserInfo(){
	$.ajax({
		url:"/user/getUser",
		type:'post',
		dataType:'json',
		success:function(data){
			if(data.code==0){
				 var info=data.data;
				 $('#name').text(info.username);
				 $('#name').after("&nbsp;<span>"+new Date(info.reg_time).Format("yyyy-MM-dd hh:mm:ss")+"</span>");
			}else{
				alert(data.msg)
			}
		}
	})
}

function logout(){
	$.ajax({
		url:"/auth/logout",
		type:'post',
		dataType:'json',
		success:function(data){
			if(data.code==0){
				window.location.reload();
			}
		}
	})
}