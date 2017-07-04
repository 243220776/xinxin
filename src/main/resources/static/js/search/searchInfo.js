$(function(){
	init();
	bindEvent();
});

function init(){
	
}

function bindEvent(){
	$("#search").bind("click",function(){
		getSearch();
	})
}

function getSearch(){
	var search=$("#txt").val();
	$.ajax({
		url:"/search/getSearch",
		data:{search:search},
		type:'post',
		dataType:'json',
		success:function(data){
			console.log(data)
		}
	})
}