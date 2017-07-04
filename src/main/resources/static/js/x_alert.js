
$(function() {
	$(".close ,.confirm").bind('click',function(){
		$(".modal_alert").hide();
	});
	
});

function showView(msg){
	$(".txt_two").text(msg);
	$(".modal_alert").show();
}

