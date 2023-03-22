package com.hwadee.scu.dao;

import com.hwadee.scu.entities.CarInformation;
import com.hwadee.scu.to.CarTo;
import com.hwadee.scu.to.SalesAndRateTo;

import java.util.List;

public interface ResultDao {
    /**
     *
     * Author:ccx
     */
    int countInfo(String carType);
    int countNewInfo();
    int getTotalSales();
    List<CarTo> showIndexTop3();
    List<Integer> showTotalSalesList();
    List<Integer> showOtherSalesList();
    List<Integer> showNewSalesList();
    Integer showCarSales();
    Integer showSUVSales();
    Integer showMPVSales();
    Integer showNewSales();
    Integer showAllSales();
    List<CarInformation> showIndexRecommend(String carType);
    List<CarInformation> showIndexNewRecommend();
    List<CarInformation> indexRecommendListNew();
    List<CarInformation> indexRecommendListOther();


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
