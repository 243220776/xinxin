package com.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.app.utils.HttpRequest;

@Controller
public class QQAPI {
	
	@RequestMapping("/qq/authQQ")
	public String authQQ(String code){
		String str = code.split("&")[0];
		String codes = str.split("=")[1];
		
		System.out.println("code:"+codes);
		
		String token = getAccessToken(codes);
		
		System.out.println("AccessToken:"+token);
		return null;
	}
	
	public String getAccessToken(String codes){
		String grant_type = "grant_type=authorization_code";
		String client_id = "client_id=101454904";
		String client_secret = "client_secret=e49ef2c34522964a2aba1427738eccbb";
		String code = "code="+codes;
		String redirect_uri = "redirect_uri=http://www.xinxin.link/H5";
		
		String url = "https://graph.qq.com/oauth2.0/token";//pc
//		String url = "https://graph.z.qq.com/moc2/token"; //wap
		
		String param = grant_type+"&"+client_id+"&"+client_secret+"&"+code+"&"+redirect_uri;

		String result = HttpRequest.httpGet(url, param);

		return result;
	}

}
