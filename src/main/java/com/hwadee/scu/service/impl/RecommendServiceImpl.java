package com.hwadee.scu.service.impl;

import com.hwadee.scu.dao.RecommendDao;
import com.hwadee.scu.entities.Account;
import com.hwadee.scu.entities.User;
import com.hwadee.scu.service.RecommendService;
import com.hwadee.scu.to.RecommendTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("recommendService")
public class RecommendServiceImpl implements RecommendService {
    @Autowired
    RecommendDao recommendDao;
    @Override
    public List<RecommendTo> selectRecommend(String  preferCarType) {

        List<RecommendTo> detailRecommend =  recommendDao.selectRecommend(preferCarType);
        return detailRecommend;
    }

    @Override
    public Account selectAccountByUsername(String username) {
        Account account = recommendDao.selectAccountByUsername(username);
        return  account;
    }

    @Override
    public User selectUserByAccountID(int accountID) {
        User user = recommendDao.selectUserByAccountID(accountID);
        return  user;
    }
}
