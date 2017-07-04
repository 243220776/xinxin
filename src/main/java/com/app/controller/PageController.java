package com.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 页面控制类 -- 用于指定显示的页面
 * @author 二更
 *
 */
@Controller
public class PageController {
	
	//前往首页
	@RequestMapping(value = {"/","index"})
	public String  indexPage(){
		
		return "/html/index.html";
	}
	
	//前往快捷登录页面
	@RequestMapping(value = {"/qq/login"})
	public String  login(){
			
		return "/html/test/login.html";
	}
	
	//前往快捷登录信息页面
	@RequestMapping(value = {"/qq/loginInfo"})
	public String  loginInfo(){
			
		return "/html/test/loginInfo.html";
	}
	
	
	
	//登录页面	
	@RequestMapping("/auth/goLogin")
	public String goLogin(){
		return "/html/userLogin/userLogin.html";
	}
	
	//注册
	@RequestMapping("/auth/goRegister")
	public String goRegister(){
		return "/html/userLogin/register.html";
	}
	
	@RequestMapping("/auth/goForgetPwd")
	public String goForgetPwd(){
		return "/html/userLogin/forgetPwd.html";
	}
	
	//个人中心页面
	@RequestMapping("/user/goUserInfo")
	public String goUserInfo(){
		return "/html/userLogin/userInfo.html";
	}
	
	/*@RequestMapping("/goSearch")
	public String goSearch(){
		return "html/search/searchInfo.html";
	}*/
	
}
