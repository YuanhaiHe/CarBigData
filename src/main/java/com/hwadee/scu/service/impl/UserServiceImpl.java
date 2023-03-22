package com.hwadee.scu.service.impl;

import com.hwadee.scu.dao.UserDao;
import com.hwadee.scu.entities.Account;
import com.hwadee.scu.entities.User;
import com.hwadee.scu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    UserDao userDao;
    @Override
    public Account selectByUnameAndPwd(Account account) {
        Account account1 = userDao.selectByUnameAndPwd(account);
        return account1;
    }

    @Override
    public Account selectAccountByUsername(String username) {
        Account account = userDao.selectAccountByUsername(username);
        return account;
    }

    @Override
    public void addAccount(Account account) {
        userDao.addAccount(account);
    }

    @Override
    public void addUser(User user) {
        userDao.addUser(user);
    }

    @Override
    public User selectUserByAccountID(int accountID) {
        User user = userDao.selectUserByAccountID(accountID);
        return user;
    }


}
