package com.hwadee.scu.controller;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.hwadee.scu.Utils.Utils;
import com.hwadee.scu.entities.TotalView;
import com.hwadee.scu.service.ResultService;
import com.hwadee.scu.to.CarTo;
import com.hwadee.scu.to.SalesAndRateTo;
import com.hwadee.scu.to.SalesTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;
@Controller
public class ResultController {
    @Autowired
    ResultService resultService;

    /**
     *
     * Author:ccx
     */
    @RequestMapping("/index")
    @ResponseBody
    public JSONObject showIndex(){
        TotalView totalView = resultService.showTotalView();
//          添加数据
        JSONObject result = new JSONObject();
        result.put("totalSales", totalView.getTotalSales());
        result.put("totalOfCarInfo", totalView.getTotalOfCarInfo());
        result.put("totalOfCar", totalView.getTotalOfCar());
        result.put("totalOfSUV", totalView.getTotalOfSUV());
        result.put("totalOfMPV", totalView.getTotalOfMPV());
        result.put("totalOfNew", totalView.getTotalOfNew());
        result.put("indexRecommend",resultService.showIndexRecommend());
        result.put("nowIndexRecommend", resultService.indexRecommendList());

//        System.out.println(totalView.getTotalSales());
//        System.out.println(totalView.getTotalOfCar());
//        System.out.println(totalView.getTotalOfSUV());
//        System.out.println(totalView.getTotalOfMPV());
//        System.out.println(totalView.getTotalOfNew());
//        System.out.println(totalView.getTotalOfCarInfo());
        //System.out.println(result);
//       返回数组到前端
        return result;
    }

    /***
     *
     * Author:hyh
     */
    @RequestMapping("/topSalesIndex")
    public String topSalesIndex(){
        return "top";
    }
    @RequestMapping("/topSales")
    @ResponseBody
    public String  topSales(){
        Map<String,Object> map = new HashMap<>();
        //数据库查询数据,并存入map集合
        List<CarTo> totalTop3Result = resultService.selectTotalTop3();
        map.put("totalTop3Result",totalTop3Result);

        List<CarTo> carTop3Result = resultService.selectCarTop3();
        map.put("carTop3Result",carTop3Result);

        List<CarTo> suvTop3Result = resultService.selectSuvTop3();
        map.put("suvTop3Result",suvTop3Result);

        List<CarTo> mpvTop3Result = resultService.selectMpvTop3();
        map.put("mpvTop3Result",mpvTop3Result);

        List<CarTo> newTop3Result = resultService.selectNewTop3();
        map.put("newTop3Result",newTop3Result);

        //将数据装换为JSON格式传递给前端
         String topData = JSON.toJSONString(map);
         //System.out.println(topData);
         return topData;
    }
    @RequestMapping("/trendAnalysisIndex")
    public String TrendAnalysisIndex(){
        return "trend";
    }
    @RequestMapping("/trendAnalysis")
    @ResponseBody
    public String trendAnalysis(){
        //数据库查询数据
        List<Integer> totalSales = resultService.selectTotalSales();
        List<Integer> newSales = resultService.selectNewSales();
        List<Integer> otherSales = resultService.selectOtherSales();
        List<Integer> carSales = resultService.selectCarSales();
        List<Integer> SUVSales = resultService.selectSuvSales();
        List<Integer> MPVSales = resultService.selectMpvSales();

        Map<String,SalesTo> salesTos = new HashMap<>();
        //将查询结果封装为对象；并存入map集合
        SalesTo totalSalesResult = Utils.processSalesResult(totalSales);
        salesTos.put("totalSalesResult",totalSalesResult);

        SalesTo newSalesResult = Utils.processSalesResult(newSales);
        salesTos.put("newSalesResult",newSalesResult);

        SalesTo otherSalesResult = Utils.processSalesResult(otherSales);
        salesTos.put("otherSalesResult",otherSalesResult);

        SalesTo carSalesResult = Utils.processSalesResult(carSales);
        salesTos.put("carSalesResult",carSalesResult);

        SalesTo SUVSalesResult = Utils.processSalesResult(SUVSales);
        salesTos.put("SUVSalesResult",SUVSalesResult);

        SalesTo MPVSalesResult = Utils.processSalesResult(MPVSales);
        salesTos.put("MPVSalesResult",MPVSalesResult);

        String trendData = JSON.toJSONString(salesTos);
        //System.out.println(trendData);
        return trendData;
     }
    @RequestMapping("/rateAnalysisIndex")
    public String rateAnalysisIndex(){
        return "rate";
    }
     @RequestMapping("/rateAnalysis")
     @ResponseBody
    public String rateAnalysis(){
        //近半年各车型销量和占比查询
         Map<String,SalesAndRateTo> map = new HashMap<>();
         SalesAndRateTo totalRateResult1 = resultService.selectTotalRate();
         SalesAndRateTo totalRateResult = Utils.processRateData(totalRateResult1);
         //System.out.println(totalRateResult);
         map.put("totalRateResult",totalRateResult);
         //model.addAttribute("totalRateResult",totalRateResult);

         //近半年新能源和非新能源销量和占比查询
         SalesAndRateTo newRateResult1 = resultService.selectNewRate();
         SalesAndRateTo newRateResult = Utils.processRateData(newRateResult1);
         //System.out.println(newRateResult);
         map.put("newRateResult",newRateResult);
         //model.addAttribute("newRateResult",newRateResult);

         //查询每个月各车型销量和占比
         List<SalesAndRateTo> rateMonthResult = resultService.selectHalfYearRate();
         //处理占比数据
         for (SalesAndRateTo salesAndRateTo : rateMonthResult) {
             Utils.processRateData(salesAndRateTo);
         }
         //转发数据给前端
         for (int i = 0; i <rateMonthResult.size() ; i++) {
             //model.addAttribute("rate"+(i+1)+"Result",rateMonthResult.get(i));
             map.put("rate"+(i+1)+"result",rateMonthResult.get(i));
             //System.out.println("rate"+(i+1)+"Result:"+rateMonthResult.get(i));
         }
         String rateData = JSON.toJSONString(map);
         //System.out.println(rateData);
         return rateData;
     }
}
