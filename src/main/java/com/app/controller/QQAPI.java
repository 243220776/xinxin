package com.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSONObject;
import com.app.utils.HttpRequest;

public class QQAPI {
    private static final String APP_ID = "101454904";
    private static final String APP_KEY = "e49ef2c34522964a2aba1427738eccbb";
    private static final String RED_IRECT_URI = "http://www.xinxin.link/H5";

    @RequestMapping({"/qq/authQQ"})
    public String authQQ(String code) {
        String str = code.split("&")[0];
        String codes = str.split("=")[1];
        System.out.println("code:" + codes);
        String token = this.getAccessToken(codes);
        System.out.println("AccessToken:" + token);
        String openId = this.getOpenId(token);
        System.out.println("openId:" + openId);
        String userInfo = this.getUserInfo(token, openId);
        System.out.println("userInfo:" + userInfo);
        return null;
    }

    public String getAccessToken(String codes) {
        String grant_type = "grant_type=authorization_code";
        String client_id = "client_id=101454904";
        String client_secret = "client_secret=e49ef2c34522964a2aba1427738eccbb";
        String code = "code=" + codes;
        String redirect_uri = "redirect_uri=http://www.xinxin.link/H5";
        String url = "https://graph.qq.com/oauth2.0/token";
        String param = grant_type + "&" + client_id + "&" + client_secret + "&" + code + "&" + redirect_uri;
        String result = HttpRequest.httpGet(url, param);
        String arr = result.split("&")[0];
        String access_token = arr.split("=")[1];
        return access_token;
    }

    public String getOpenId(String token) {
        String url = "https://graph.qq.com/oauth2.0/me";
        String param = "access_token=" + token;
        String result = HttpRequest.httpGet(url, param);
        result = result.replace("callback(", "");
        result = result.replace(");", "");
        JSONObject json = JSONObject.parseObject(result);
        String openid = (String)json.get("openid");
        return openid;
    }

    public String getUserInfo(String token, String openId) {
        String url = "https://graph.qq.com/user/get_user_info";
        String access_token = "access_token=" + token;
        String oauth_consumer_key = "oauth_consumer_key=101454904";
        String openid = "openid=" + openId;
        String param = access_token + "&" + oauth_consumer_key + "&" + openid;
        String result = HttpRequest.httpGet(url, param);
        return result;
    }
}
