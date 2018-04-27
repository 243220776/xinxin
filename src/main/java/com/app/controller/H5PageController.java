package com.app.controller;
@Controller
public class H5PageController {
    @RequestMapping({"/H5"})
    public String indexPage() {
        return "/H5/html/index.html";
    }

    @RequestMapping({"/auth/login"})
    public String loginPage() {
        return "/H5/html/login.html";
    }

    @RequestMapping({"/users/user"})
    public String mainPage() {
        return "/H5/html/user.html";
    }
}
