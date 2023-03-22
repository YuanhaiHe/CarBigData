package com.hwadee.scu.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class MyInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//        System.out.println(request.getSession().getAttribute("username"));
        if(request.getSession().getAttribute("username") == null){
//            HttpSession session = request.getSession(true);
//            String uri = request.getRequestURI();//拿到上一个页面地址
//            String path = uri.substring(request.getContextPath().length());//去掉项目地址长度的字符（因为我的默认项目地址是给出的）
//            String url = path.substring(1);
//            System.out.println(url);
//            request.getSession().setAttribute("url",url);
            //重定向
            response.sendRedirect("/");
            return false;
        }
        //放行
        return true;
    }
}
