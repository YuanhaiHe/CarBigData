package com.hwadee.scu.entities;

public class TotalView {
    private int totalSales;
    private int totalOfCarInfo;
    private int totalOfCar;
    private int totalOfSUV;
    private int totalOfMPV;
    private int totalOfNew;

    public TotalView(){}

    public TotalView(int totalSales, int totalOfCarInfo, int totalOfCar, int totalOfSUV, int totalOfMPV, int totalOfNew){
        this.totalSales = totalSales;
        this.totalOfCarInfo = totalOfCarInfo;
        this.totalOfCar = totalOfCar;
        this.totalOfSUV = totalOfSUV;
        this.totalOfMPV = totalOfMPV;
        this.totalOfNew = totalOfNew;
    }

    public void setTotalSales(int totalSales) {
        this.totalSales = totalSales;
    }

    public void setTotalOfCar(int totalOfCar) {
        this.totalOfCar = totalOfCar;
    }

    public void setTotalOfCarInfo(int totalOfCarInfo) {
        this.totalOfCarInfo = totalOfCarInfo;
    }

    public void setTotalOfMPV(int totalOfMPV) {
        this.totalOfMPV = totalOfMPV;
    }

    public void setTotalOfNew(int totalOfNew) {
        this.totalOfNew = totalOfNew;
    }

    public void setTotalOfSUV(int totalOfSUV) {
        this.totalOfSUV = totalOfSUV;
    }

    public int getTotalOfCar() {
        return totalOfCar;
    }

    public int getTotalOfCarInfo() {
        return totalOfCarInfo;
    }

    public int getTotalOfMPV() {
        return totalOfMPV;
    }

    public int getTotalOfNew() {
        return totalOfNew;
    }

    public int getTotalOfSUV() {
        return totalOfSUV;
    }

    public int getTotalSales() {
        return totalSales;
    }

    @Override
    public String toString() {
        return "totalView{"+
                "totalSales='"+totalSales+'\''+
                ", totalOfCarInfo='"+totalOfCarInfo+"\'"+
                ", totalOfCar='"+totalOfCar+"\'"+
                ", totalOfSUV='"+totalOfSUV+"\'"+
                ", totalOfMPV='"+totalOfMPV+"\'"+
                ", totalOfNew='"+totalOfNew+"\'"+
                "}";
    }
}

