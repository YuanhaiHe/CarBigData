package com.hwadee.scu.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.hwadee.scu.dao.ResultDao;
import com.hwadee.scu.entities.CarInformation;
import com.hwadee.scu.entities.TotalView;
import com.hwadee.scu.to.CarTo;
import com.hwadee.scu.service.ResultService;
import com.hwadee.scu.to.SalesAndRateTo;
import com.hwadee.scu.to.SalesTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Formatter;
import java.util.List;

@Service("resultService")
public class ResultServiceImpl implements ResultService {
    @Autowired
    ResultDao resultDao;

    /**
     *
    Author:ccx
     */

    /*
    主页的功能模块
*/

    //总览部分
    @Override
    public int countInfo(String carType, Boolean isNew) {
        if (!isNew) {
            return resultDao.countInfo(carType);
        }
        else {
            return resultDao.countNewInfo();
        }
    }

    @Override
    public TotalView showTotalView(){
        TotalView totalView = new TotalView();
        totalView.setTotalOfCar(countInfo("轿车", false));
        totalView.setTotalOfSUV(countInfo("SUV", false));
        totalView.setTotalOfMPV(countInfo("MPV", false));
        totalView.setTotalOfNew(countInfo("新能源", true));
        totalView.setTotalOfCarInfo(totalView.getTotalOfCar()+totalView.getTotalOfSUV()+totalView.getTotalOfMPV()+totalView.getTotalOfNew());
        totalView.setTotalSales(resultDao.getTotalSales());
        return totalView;
    }

    //    汽车销量排行(总)部分
    @Override
    public JSONObject showIndexTop3(){
        JSONObject obj = new JSONObject();
        List<CarTo> top3 = resultDao.showIndexTop3();
        for(int i = 1; i<=3; i++){
            obj.put(String.format("carName%d", i), top3.get(i-1).getCarName());
            obj.put(String.format("carType%d", i), top3.get(i-1).getCarType());
            obj.put(String.format("sales%d", i), top3.get(i-1).getTotalSales());
        }
        return obj;
    }

    //    分月汽车销量分析部分
    @Override
    public JSONArray showTotalSalesList(){
        List<Integer> out = resultDao.showTotalSalesList();
        JSONArray jsonArray = JSONArray.parseArray(JSON.toJSONString(out));
        return jsonArray;
    }
    @Override
    public JSONArray showOtherSalesList(){
        List<Integer> out = resultDao.showOtherSalesList();
        JSONArray jsonArray = JSONArray.parseArray(JSON.toJSONString(out));
        return jsonArray;
    }
    @Override
    public JSONArray showNewSalesList(){
        List<Integer> out = resultDao.showNewSalesList();
        JSONArray jsonArray = JSONArray.parseArray(JSON.toJSONString(out));
        return jsonArray;
    }
    //    汽车销量占比部分
    @Override
    public JSONObject showRateResult(){
        JSONObject obj = new JSONObject();
        Integer carSales = resultDao.showCarSales();
        Integer SUVSales = resultDao.showSUVSales();
        Integer MPVSales = resultDao.showMPVSales();
        Integer totalSales = carSales+SUVSales+MPVSales;
        float rateCar = (float)carSales/totalSales;
        float rateSUV = (float)SUVSales/totalSales;
        float rateMPV = (float)MPVSales/totalSales;
        obj.put("percentOfCar", new Formatter().format("%.2f", rateCar).toString());
        obj.put("salesOfCar", carSales);
        obj.put("percentOfSUV", new Formatter().format("%.2f", rateSUV).toString());
        obj.put("salesOfSUV", SUVSales);
        obj.put("percentOfMPV", new Formatter().format("%.2f", rateMPV).toString());
        obj.put("salesOfMPV", MPVSales);
        return obj;
    }
    //    新能源汽车占比部分
    @Override
    public double showNewAndAllRateResult(){
        Integer newSales = resultDao.showNewSales();
        Integer allSales = resultDao.showAllSales();
//        System.out.println("\nnewSales"+newSales);
//        System.out.println("\nallSales"+allSales);
        double rate = (double)newSales/allSales;
//        System.out.println(rate);
        return rate;
    }
    @Override
    public Integer showNewSales(){
        Integer sales = resultDao.showNewSales();
        return sales;
    }
    //    首页推荐部分
    @Override
    public JSONObject showIndexRecommend(){
        List<CarInformation> carRecommend = resultDao.showIndexRecommend("轿车");
        List<CarInformation> SUVRecommend = resultDao.showIndexRecommend("SUV");
        List<CarInformation> MPVRecommend = resultDao.showIndexRecommend("MPV");
        List<CarInformation> newRecommend = resultDao.showIndexNewRecommend();
        JSONObject obj = new JSONObject();
        int i = 0;
        for(i=1; i<=2; i++){
            obj.put(String.format("nameOfCar%d", i), carRecommend.get(i-1).getCarName());
            obj.put(String.format("priceOfCar%d", i), (carRecommend.get(i-1).getPriceL()+carRecommend.get(i-1).getPriceH())/2);
            obj.put(String.format("paraOfCar%d", i), carRecommend.get(i-1).getInformation());
        }
        for(i=1; i<=2; i++){
            obj.put(String.format("nameOfSUV%d", i), SUVRecommend.get(i-1).getCarName());
            obj.put(String.format("priceOfSUV%d", i), (SUVRecommend.get(i-1).getPriceL()+SUVRecommend.get(i-1).getPriceH())/2);
            obj.put(String.format("paraOfSUV%d", i), SUVRecommend.get(i-1).getInformation());
        }
        for(i=1; i<=2; i++){
            obj.put(String.format("nameOfMPV%d", i), MPVRecommend.get(i-1).getCarName());
            obj.put(String.format("priceOfMPV%d", i), (MPVRecommend.get(i-1).getPriceL()+MPVRecommend.get(i-1).getPriceH())/2);
            obj.put(String.format("paraOfMPV%d", i), MPVRecommend.get(i-1).getInformation());
        }
        for(i=1; i<=2; i++){
            obj.put(String.format("nameOfNew%d", i), newRecommend.get(i-1).getCarName());
            obj.put(String.format("priceOfNew%d", i), (newRecommend.get(i-1).getPriceL()+newRecommend.get(i-1).getPriceH())/2);
            obj.put(String.format("paraOfNew%d", i), newRecommend.get(i-1).getInformation());
        }
        return obj;
    }

    /**
     *
     * Author:hyh
     */
    @Override
    public List<CarTo> selectTotalTop3() {
        List<CarTo> totalTop3 = resultDao.selectTotalTop3();
        return totalTop3;
    }
    @Override
    public List<CarTo> selectCarTop3() {
        List<CarTo> carTop3 =  resultDao.selectCarTop3();
        return carTop3;
    }
    @Override
    public List<CarTo> selectSuvTop3() {
        List<CarTo> suvTop3 =  resultDao.selectSuvTop3();
        return suvTop3;
    }
    @Override
    public List<CarTo> selectMpvTop3() {
        List<CarTo> mpvTop3 =  resultDao.selectMpvTop3();
        return mpvTop3;
    }
    @Override
    public List<CarTo> selectNewTop3() {
        List<CarTo> newTop3 =  resultDao.selectNewTop3();
        return newTop3;
    }




    @Override
    public  List<Integer> selectTotalSales() {
        List<Integer> totalSalesResult = resultDao.selectTotalSales();
        return totalSalesResult;
    }
    @Override
    public List<Integer> selectCarSales() {
        List<Integer> carSalesResult = resultDao.selectCarSales();
        return carSalesResult;
    }
    @Override
    public List<Integer> selectSuvSales() {
        List<Integer> suvSalesResult = resultDao.selectSuvSales();
        return suvSalesResult;
    }
    @Override
    public List<Integer> selectMpvSales() {
        List<Integer> mpvSalesResult = resultDao.selectMpvSales();
        return mpvSalesResult;
    }
    @Override
    public List<Integer> selectNewSales() {
        List<Integer> newSalesResult = resultDao.selectNewSales();
        return newSalesResult;
    }
    @Override
    public List<Integer> selectOtherSales() {
        List<Integer> otherSalesResult = resultDao.selectOtherSales();
        return otherSalesResult;
    }


    @Override

    public SalesAndRateTo selectTotalRate() {
        SalesAndRateTo totalRateResult = resultDao.selectTotalRate();
        return  totalRateResult;
    }

    @Override
    public SalesAndRateTo selectNewRate() {
        SalesAndRateTo newRateResult = resultDao.selectNewRate();
        return  newRateResult;
    }

    @Override
    public List<SalesAndRateTo> selectHalfYearRate() {
        List<SalesAndRateTo> salesAndRateTos = resultDao.selectHalfYearRate();
        return salesAndRateTos;
    }

    @Override
    public JSONObject indexRecommendList(){
        List<CarInformation> oilRecommend = resultDao.indexRecommendListOther();
        List<CarInformation> newRecommend = resultDao.indexRecommendListNew();
        JSONObject obj = new JSONObject();
        int i = 0;
        for(i=1; i<=3; i++){
            obj.put(String.format("nameOfOil%d", i), oilRecommend.get(i-1).getCarName());
            obj.put(String.format("priceOfOil%d", i), (oilRecommend.get(i-1).getPriceL()+oilRecommend.get(i-1).getPriceH())/2);
            obj.put(String.format("paraOfOil%d", i), oilRecommend.get(i-1).getInformation());
            obj.put(String.format("typeOfOil%d", i), oilRecommend.get(i-1).getCarType());
        }
        for(i=1; i<=3; i++){
            obj.put(String.format("nameOfNew%d", i), newRecommend.get(i-1).getCarName());
            obj.put(String.format("priceOfNew%d", i), (newRecommend.get(i-1).getPriceL()+newRecommend.get(i-1).getPriceH())/2);
            obj.put(String.format("paraOfNew%d", i), newRecommend.get(i-1).getInformation());
            obj.put(String.format("typeOfNew%d", i), newRecommend.get(i-1).getCarType());
        }
        return obj;
    }
}
