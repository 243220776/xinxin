package com.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 页面控制类 -- 用于指定显示的页面
 * @author 二更
 *
 */
@Controller
public class H5PageController {
	
	//前往首页
	@RequestMapping("/H5")
	public String  indexPage(){
		
		return "/H5/html/index.html";
	}
	
	//登录页面
	@RequestMapping("/auth/login")
	public String  loginPage(){
			
		return "/H5/html/login.html";
	}
	
	@RequestMapping("/users/user")
	public String  mainPage(){
			
		return "/H5/html/user.html";
	}
	
}
