package com.hwadee.scu.to;

public class RecommendTo {
    private  double price;
    private  String carName;
    private  String carPara;
    private  String carImage;
    public RecommendTo() {
    }

    public RecommendTo(double price, String carName, String carPara, String carImage) {
        this.price = price;
        this.carName = carName;
        this.carPara = carPara;
        this.carImage = carImage;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getCarPara() {
        return carPara;
    }

    public void setCarPara(String carPara) {
        this.carPara = carPara;
    }

    public String getCarImage() {
        return carImage;
    }

    public void setCarImage(String carImage) {
        this.carImage = carImage;
    }

    @Override
    public String toString() {
        return "RecommendTo{" +
                "price=" + price +
                ", carName='" + carName + '\'' +
                ", carPara='" + carPara + '\'' +
                ", carImage='" + carImage + '\'' +
                '}';
    }
}
