package com.hwadee.scu.to;

public class CarTo {
    private String carType;
    private String carName;
    private int totalSales;

    public CarTo() {
    }

    public CarTo(String carType, String carName, int totalSales) {
        this.carName = carName;
        this.carType = carType;
        this.totalSales = totalSales;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getCarType() {
        return carType;
    }

    public void setCarType(String carType) {
        this.carType = carType;
    }

    public double getTotalSales() {
        return totalSales;
    }

    public void setTotalSales(int totalSales) {
        this.totalSales = totalSales;
    }

    @Override
    public String toString() {
        return "CarTo{" +
                "carName='" + carName + '\'' +
                ", carType='" + carType + '\'' +
                ", totalSales=" + totalSales +
                '}';
    }
}