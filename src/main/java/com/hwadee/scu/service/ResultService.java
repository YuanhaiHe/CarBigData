package com.hwadee.scu.service;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.hwadee.scu.entities.TotalView;
import com.hwadee.scu.to.CarTo;
import com.hwadee.scu.to.SalesAndRateTo;
import java.util.List;

public interface ResultService {
    /**
     *
     * Author:ccx
     */
    TotalView showTotalView();
    int countInfo(String carType, Boolean isNew);
    JSONObject showIndexTop3();
    JSONArray showTotalSalesList();
    JSONArray showOtherSalesList();
    JSONArray showNewSalesList();
    JSONObject showRateResult();
    double showNewAndAllRateResult();
    Integer showNewSales();
    JSONObject showIndexRecommend();
    JSONObject indexRecommendList();



    /**
     *
     * Author:hyh
     */
    List<CarTo> selectTotalTop3();
    List<CarTo> selectCarTop3();
    List<CarTo> selectSuvTop3();
    List<CarTo> selectMpvTop3();
    List<CarTo> selectNewTop3();

    List<Integer> selectTotalSales();
    List<Integer> selectCarSales();
    List<Integer> selectSuvSales();
    List<Integer> selectMpvSales();
    List<Integer> selectNewSales();
    List<Integer> selectOtherSales();


    SalesAndRateTo selectTotalRate();
    SalesAndRateTo selectNewRate();

    List<SalesAndRateTo> selectHalfYearRate();
}
