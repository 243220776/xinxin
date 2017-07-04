$(function(){
	init();
	bindEvent();
});

function init(){
	

}
function bindEvent(){	
	//发送验证码
	$("#code_btn").bind('click',function(){
		if(phoneExist()){
			send_msg();
		}
	})
	
	$("#register").bind('click',function(){
		if(phoneExist()&&pwd_check()&&surePwd()&&code_check()){
			updatePwd();
		}
	})
	
	$("#phone").bind('blur',function(){
		phoneExist();
	})
	$("#pwd").bind('blur',function(){
		pwd_check();
	})
	$("#pwd2").bind('blur',function(){
		surePwd();
	})
	$("#p_code").bind('blur',function(){
		code_check();
	})
}

function updatePwd(){
	var password=$("#pwd").val();
	var phone=$("#phone").val();
	var code=$("#p_code").val();
	var data = {password:password,phone:phone,code:code};
	$.ajax('/auth/updatePwd',{
		data:data,
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		async :false,
		success:function(data){
			if (data.code == 1) {
				showView("恭喜您密码重置成功！");
				$(".close ,.confirm").bind('click',function(){
					window.location.href="/auth/goLogin";
				});
			}else{
				showView(data.msg);
			}
		} 
	});
}

function code_check(){
	$("#p_code_err").text("");
	var p_code = $("#p_code").val();
	if (p_code == "") {
		$("#p_code_err").text("验证码不能为空！");
		return false;
	}
		return true;
}

//密码校验
function pwd_check(){

    var pwd=$('#pwd').val();
    
    if(pwd==""){
        $('#pwd_err').text('密码不能为空！');
        return false;
    }else if(pwd.length<6){
        $('#pwd_err').text('密码强度不够！');
        return true;
    }else{
    	$('#pwd_err').text('');
        return true;
    }
}

//确认密码
function surePwd(){

	var pwd=$('#pwd').val();
	var pwd2=$('#pwd2').val();
    if(pwd2==""){
        $('#pwd2_err').text('确认密码不能为空！');
        return false;
    }else if(pwd!=pwd2){
        $('#pwd2_err').text('两次输入密码不一致！');
        return false;
    }else{
    	 $('#pwd2_err').text('');
        return true;
    }
}

//手机号校验
function phoneExist(){
	
	var reg=/^1[3|4|5|7|8]\d{9}$/;
	
	var flag_p = true; 
	$("#phone_err").text("");
	var phone = $("#phone").val();
	if (phone == "") {
		$("#phone_err").text("手机号不能为空！");
		 return false;
	}
	
	if(!(reg.test(phone))){
        $('#phone_err').text('手机号码格式不正确！');
        return  false;
    }
	
	$.ajax('/auth/phoneExist',{
		data:{phone:phone},
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		async :false,
		success:function(data){
			if (data ==0) {
				$("#phone_err").text("对不起，此手机号未被注册过！");
				 flag_p = false;
			}
		} 
	});
	return  flag_p ;
}

//倒计时
var countdown=60;
function settime(obj) {
    if (countdown == 0) {
        $(obj).removeAttr("disabled");
        $(obj).val("获取验证码");
        countdown = 60;
        return;
    }
    else {
    	$(obj).attr("disabled", true);
    	$(obj).val("重新发送(" + countdown + ")");
        countdown--;
    }
    setTimeout(function() {
        settime(obj) },1000)
}
function send_msg(){
	var telcode={};
	telcode["phone"]=$("#phone").val();
	var obj = $("#code_btn");

	$.ajax('/telCode/getCode',{
			data:telcode,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			async :false,
			success:function(data){
				if (data.code==1) {
					settime(obj);
				}else{
					alert("发送验证码失败！")
				}
			} 
		});
}