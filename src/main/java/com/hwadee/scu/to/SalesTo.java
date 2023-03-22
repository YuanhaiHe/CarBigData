package com.hwadee.scu.to;

public class SalesTo {
   private Integer month1Sales;
   private Integer month2Sales;
   private Integer month3Sales;
   private Integer month4Sales;
   private Integer month5Sales;
   private Integer month6Sales;

    public SalesTo() {
    }

    public SalesTo(Integer month1Sales, Integer month2Sales, Integer month3Sales, Integer month4Sales, Integer month5Sales, Integer month6Sales) {
        this.month1Sales = month1Sales;
        this.month2Sales = month2Sales;
        this.month3Sales = month3Sales;
        this.month4Sales = month4Sales;
        this.month5Sales = month5Sales;
        this.month6Sales = month6Sales;
    }

    public Integer getMonth1Sales() {
        return month1Sales;
    }

    public void setMonth1Sales(Integer month1Sales) {
        this.month1Sales = month1Sales;
    }

    public Integer getMonth2Sales() {
        return month2Sales;
    }

    public void setMonth2Sales(Integer month2Sales) {
        this.month2Sales = month2Sales;
    }

    public Integer getMonth3Sales() {
        return month3Sales;
    }

    public void setMonth3Sales(Integer month3Sales) {
        this.month3Sales = month3Sales;
    }

    public Integer getMonth4Sales() {
        return month4Sales;
    }

    public void setMonth4Sales(Integer month4Sales) {
        this.month4Sales = month4Sales;
    }

    public Integer getMonth5Sales() {
        return month5Sales;
    }

    public void setMonth5Sales(Integer month5Sales) {
        this.month5Sales = month5Sales;
    }

    public Integer getMonth6Sales() {
        return month6Sales;
    }

    public void setMonth6Sales(Integer month6Sales) {
        this.month6Sales = month6Sales;
    }

    @Override
    public String toString() {
        return "SalesTo{" +
                "month1Sales=" + month1Sales +
                ", month2Sales=" + month2Sales +
                ", month3Sales=" + month3Sales +
                ", month4Sales=" + month4Sales +
                ", month5Sales=" + month5Sales +
                ", month6Sales=" + month6Sales +
                '}';
    }
}
