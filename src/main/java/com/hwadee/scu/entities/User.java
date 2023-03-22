package com.hwadee.scu.entities;

import java.util.Date;

public class User {
    private int userID;
    private int accountID;
    private String preferCarType;

    public User() {
    }

    public User(int userID, int accountID, String preferCarType) {
        this.userID = userID;
        this.accountID = accountID;
        this.preferCarType = preferCarType;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getAccountID() {
        return accountID;
    }

    public void setAccountID(int accountID) {
        this.accountID = accountID;
    }

    public String getPreferCarType() {
        return preferCarType;
    }

    public void setPreferCarType(String preferCarType) {
        this.preferCarType = preferCarType;
    }

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", accountID=" + accountID +
                ", preferCarType='" + preferCarType + '\'' +
                '}';
    }
}
