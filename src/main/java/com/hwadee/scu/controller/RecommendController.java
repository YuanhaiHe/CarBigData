package com.hwadee.scu.controller;

import com.alibaba.fastjson.JSON;
import com.hwadee.scu.Utils.Utils;
import com.hwadee.scu.entities.Account;
import com.hwadee.scu.entities.User;
import com.hwadee.scu.service.RecommendService;
import com.hwadee.scu.service.UserService;
import com.hwadee.scu.to.RecommendTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Author:hyh
 */
@Controller
public class RecommendController {
    @Autowired
    RecommendService recommendService;
    @RequestMapping("/recommendIndex")
    public String recommendIndex(){
        return "recommend";
    }
    @RequestMapping("/recommend")
    @ResponseBody
    public String recommend(HttpServletRequest request){
        String username = request.getSession().getAttribute("username").toString();
        //System.out.println(username);
        //通过用户名查询到用户账号信息
        Account account =  recommendService.selectAccountByUsername(username);
        //根据账号信息查询用户其他信息
        User user = recommendService.selectUserByAccountID(account.getAccountID());
        System.out.println("user:"+user);
        //根据用户其他信息查询符合条件的车信息
        List<RecommendTo> detailRecommend1 = recommendService.selectRecommend(user.getPreferCarType());
        List<RecommendTo> detailRecommend = Utils.processPriceData(detailRecommend1);
        //System.out.println(detailRecommend);
        Map<String,List> map = new HashMap<>();
        map.put("detailRecommend",detailRecommend);
        String recommendData  = JSON.toJSONString(map);
        System.out.println(recommendData);
        return recommendData;
    }
}
