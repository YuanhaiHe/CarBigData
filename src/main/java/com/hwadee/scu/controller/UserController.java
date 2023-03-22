package com.hwadee.scu.controller;
import com.hwadee.scu.entities.Account;
import com.hwadee.scu.entities.User;
import com.hwadee.scu.service.UserService;
import com.hwadee.scu.to.AccountTo;
import com.mysql.cj.Session;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Author:hyh
 */
@Controller
public class UserController {
    @Autowired
    UserService userService;
    @RequestMapping("/registerIndex")
    public String register(){
        return "register";
    }
    @RequestMapping("/loginIndex")
    public String login(){
        return "login";
    }
    @RequestMapping("/register")
    @ResponseBody
    public String checkRegister(AccountTo accountTo,HttpServletRequest request){
        System.out.println(accountTo);
        Account account = new Account();
        User user = new User();
        //将接收的前端参数对应拷贝到account和user
        BeanUtils.copyProperties(accountTo,account);
        BeanUtils.copyProperties(accountTo,user);
        System.out.println(account);
        System.out.println(user);
        if(account.getUsername() == null || account.getUsername().equals("")
                || account.getPassword()== null || account.getPassword().equals("") ){
            //可返回前端提示信息
            System.out.println("用户名或密码为空，请重新填写");
            return "null";
        }else{
            Account registerAccount = userService.selectAccountByUsername(account.getUsername());
            System.out.println("registerAccount:"+registerAccount);
            if( registerAccount != null){
                //，注册失败，此账户已存在，提示用户可直接登陆
                System.out.println("此账户已存在,可直接登录");
                //重新注册账号
                return "error";
            }
                //数据库没查到，没有此账户，证明可以注册
                //能够注册，则记住用户所填写的附加信息，存入数据库
                userService.addAccount(account);
                Account account1 = userService.selectAccountByUsername(account.getUsername());
                //添加用户信息
                user.setAccountID(account1.getAccountID());
                userService.addUser(user);
                System.out.println("注册成功,跳转到首页");
                request.getSession().setAttribute("username",account.getUsername());
                return "success";
        }
    }
    @RequestMapping("/login")
    @ResponseBody
    public String loginCheck(AccountTo accountTo, HttpServletRequest request){
        Account account = new Account();
        //将接收的前端参数对应拷贝到account
        BeanUtils.copyProperties(accountTo,account);
        System.out.println(account);
        if(account.getUsername() == null || account.getUsername().equals("")
            || account.getPassword()== null || account.getPassword().equals("") ){
            //可返回前端提示信息
            System.out.println("用户名或密码为空，请重新填写");
            return "null" ;
        }else{
            Account loginAccount = userService.selectByUnameAndPwd(account);
            System.out.println(loginAccount);
            if(loginAccount==null){
                //数据库没查到，没有此账户，提示用户重新填写
                System.out.println("账号或密码错误");
                //提示用户
                return "error";
            }
            //数据库有此账户，登陆成功
            System.out.println("登陆成功，跳转首页");
            request.getSession().setAttribute("username",loginAccount.getUsername());
            return "success";
        }
    }
    @RequestMapping("/showIndex")
    public String showIndex(){
        return "index";
    }
    @RequestMapping("/exit")
    @ResponseBody
    public String exit(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        request.getSession().removeAttribute("username");

        System.out.println("exit");
//        request.getRequestDispatcher("/WEB-INF/login.html").forward(request,response);
        return "success";
    }

}
