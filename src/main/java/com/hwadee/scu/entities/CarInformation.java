package com.hwadee.scu.entities;

public class CarInformation {
    private Integer carID;
    private String carName;
    private String carType;
    private float priceL;
    private float priceH;
    private String information;

    public CarInformation(){}

    public CarInformation(Integer carID, String carName, String carType, float priceL, float priceH, String information){
        this.carID = carID;
        this.carName = carName;
        this.carType = carType;
        this.priceL = priceL;
        this.priceH = priceH;
        this.information = information;
    }

    public Integer getCarID(){return  carID;}

    public String getCarName(){return  carName;}

    public String getCarType(){return carType;}

    public float getPriceL(){return priceL;}

    public float getPriceH(){return priceH;}

    public String getInformation(){return information;}

    public void setCarID(Integer carID) {
        this.carID = carID;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public void setCarType(String carType) {
        this.carType = carType;
    }

    public void setPriceH(Integer priceH) {
        this.priceH = priceH;
    }

    public void setPriceL(Integer priceL) {
        this.priceL = priceL;
    }

    public void setInformation(String information) {
        this.information = information;
    }

    @Override
    public String toString(){
        return "carInfo{"+
                "carID='"+carID+'\''+
                ", carName='"+carName+"\'"+
                ", carType='"+ carType +"\'"+
                ", priceLow='"+priceL+"\'"+
                ", priceHigh='"+priceH+"\'"+
                ", information='"+ information +"\'"+
                "}";
    }
}
