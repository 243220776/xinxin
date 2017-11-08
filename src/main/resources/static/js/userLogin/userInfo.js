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
//				 $('#name').after("&nbsp;<span>"+new Date(info.reg_time).Format("yyyy-MM-dd hh:mm:ss")+"</span>");
				 $('#registerDate').text(new Date(info.reg_time).Format("yyyy-MM-dd hh:mm:ss"));
				 var star = new Date(info.reg_time).Format("yyyy-MM-dd");
				 var nows = new Date(new Date).Format("yyyy-MM-dd");
				 $('#day').text(DateDiff(star,nows)+"天");
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

function  DateDiff(sDate1,sDate2){//sDate1和sDate2是2006-12-18格式  
	var dateSpan,tempDate,iDays;
	sDate1 = Date.parse(sDate1);
	sDate2 = Date.parse(sDate2);
	dateSpan = sDate2 - sDate1;
	dateSpan = Math.abs(dateSpan);
	iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
	return iDays
}    