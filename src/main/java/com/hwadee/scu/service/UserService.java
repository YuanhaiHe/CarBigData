package com.hwadee.scu.service;

import com.hwadee.scu.entities.Account;
import com.hwadee.scu.entities.User;

public interface UserService {
    Account selectByUnameAndPwd( Account account);
    Account selectAccountByUsername(String username);
    void addAccount(Account account);
    void addUser(User user);
    User selectUserByAccountID(int accountID);
}
