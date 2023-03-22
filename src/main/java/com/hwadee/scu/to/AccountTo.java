package com.hwadee.scu.to;
/*
接收前端用户注册信息数据
*/
public class AccountTo {
    private String username;
    private String password;
    private String preferCarType;

    public AccountTo() {
    }

    public AccountTo(String username, String password, String preferCarType) {
        this.username = username;
        this.password = password;
        this.preferCarType = preferCarType;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPreferCarType() {
        return preferCarType;
    }

    public void setPreferCarType(String preferCarType) {
        this.preferCarType = preferCarType;
    }

    @Override
    public String toString() {
        return "AccountTo{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", preferCarType='" + preferCarType + '\'' +
                '}';
    }
}
