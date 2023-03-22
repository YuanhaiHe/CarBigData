package com.hwadee.scu.to;

import javax.xml.crypto.Data;
import java.util.Date;

public class SalesAndRateTo {
    private int carSales;
    private double carRate;
    private int suvSales;
    private double suvRate;
    private int mpvSales;
    private double mpvRate;
    private int newSales;
    private double newRate;
    private int otherSales;
    private double otherRate;

    public SalesAndRateTo() {
    }

    public SalesAndRateTo(int carSales, double carRate, int suvSales, double suvRate, int mpvSales, double mpvRate, int newSales, double newRate, int otherSales, double otherRate) {
        this.carSales = carSales;
        this.carRate = carRate;
        this.suvSales = suvSales;
        this.suvRate = suvRate;
        this.mpvSales = mpvSales;
        this.mpvRate = mpvRate;
        this.newSales = newSales;
        this.newRate = newRate;
        this.otherSales = otherSales;
        this.otherRate = otherRate;
    }

    public int getCarSales() {
        return carSales;
    }

    public void setCarSales(int carSales) {
        this.carSales = carSales;
    }

    public double getCarRate() {
        return carRate;
    }

    public void setCarRate(double carRate) {
        this.carRate = carRate;
    }

    public int getSuvSales() {
        return suvSales;
    }

    public void setSuvSales(int suvSales) {
        this.suvSales = suvSales;
    }

    public double getSuvRate() {
        return suvRate;
    }

    public void setSuvRate(double suvRate) {
        this.suvRate = suvRate;
    }

    public int getMpvSales() {
        return mpvSales;
    }

    public void setMpvSales(int mpvSales) {
        this.mpvSales = mpvSales;
    }

    public double getMpvRate() {
        return mpvRate;
    }

    public void setMpvRate(double mpvRate) {
        this.mpvRate = mpvRate;
    }

    public int getNewSales() {
        return newSales;
    }

    public void setNewSales(int newSales) {
        this.newSales = newSales;
    }

    public double getNewRate() {
        return newRate;
    }

    public void setNewRate(double newRate) {
        this.newRate = newRate;
    }

    public int getOtherSales() {
        return otherSales;
    }

    public void setOtherSales(int otherSales) {
        this.otherSales = otherSales;
    }

    public double getOtherRate() {
        return otherRate;
    }

    public void setOtherRate(double otherRate) {
        this.otherRate = otherRate;
    }

    @Override
    public String toString() {
        return "SalesAndRateTo{" +
                "carSales=" + carSales +
                ", carRate=" + carRate +
                ", suvSales=" + suvSales +
                ", suvRate=" + suvRate +
                ", mpvSales=" + mpvSales +
                ", mpvRate=" + mpvRate +
                ", newSales=" + newSales +
                ", newRate=" + newRate +
                ", otherSales=" + otherSales +
                ", otherRate=" + otherRate +
                '}';
    }
}
