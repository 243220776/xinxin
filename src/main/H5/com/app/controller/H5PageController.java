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
	
}
