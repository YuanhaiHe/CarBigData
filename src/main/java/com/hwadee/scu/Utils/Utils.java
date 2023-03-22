package com.hwadee.scu.Utils;

import com.hwadee.scu.to.RecommendTo;
import com.hwadee.scu.to.SalesAndRateTo;
import com.hwadee.scu.to.SalesTo;
import java.math.BigDecimal;
import java.util.List;
/*
工具类，用于某些操作，例如验证码等
 */
public class Utils {
    /**
     * Author:hyh
     */
    //工具类私有构造方法，不允许创建对象
    private Utils(){

    }
    public static SalesTo processSalesResult(List<Integer> result){
    int[] arrayResult = result.stream().mapToInt(Integer::intValue).toArray();
    SalesTo salesTo = new SalesTo();
    salesTo.setMonth1Sales(arrayResult[0]);
    salesTo.setMonth2Sales(arrayResult[1]);
    salesTo.setMonth3Sales(arrayResult[2]);
    salesTo.setMonth4Sales(arrayResult[3]);
    salesTo.setMonth5Sales(arrayResult[4]);
    salesTo.setMonth6Sales(arrayResult[5]);
    return  salesTo;
}
    public static SalesAndRateTo processRateData(SalesAndRateTo salesAndRateTo){
        double carRate = salesAndRateTo.getCarRate();
        BigDecimal bd = new BigDecimal(carRate);
        carRate = bd.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        salesAndRateTo.setCarRate(carRate);

        double suvRate = salesAndRateTo.getSuvRate();
        BigDecimal bd1 = new BigDecimal(suvRate);
        suvRate = bd1.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        salesAndRateTo.setSuvRate(suvRate);

        double mpvRate = salesAndRateTo.getMpvRate();
        BigDecimal bd2 = new BigDecimal(mpvRate);
        mpvRate = bd2.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        salesAndRateTo.setMpvRate(mpvRate);

        double newRate = salesAndRateTo.getNewRate();
        BigDecimal bd3 = new BigDecimal(newRate);
        newRate = bd3.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        salesAndRateTo.setNewRate(newRate);

        double otherRate = salesAndRateTo.getOtherRate();
        BigDecimal bd4 = new BigDecimal(otherRate);
        otherRate = bd4.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
        salesAndRateTo.setOtherRate(otherRate);

        return  salesAndRateTo;
}
    public static List<RecommendTo> processPriceData(List<RecommendTo> recommendTo){
        for (RecommendTo recommend : recommendTo) {
            double price = recommend.getPrice();
            BigDecimal bd = new BigDecimal(price);
            price = bd.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
            recommend.setPrice(price);
        }
        return recommendTo;
    }
}
