package com.hwadee.scu.service;

import com.hwadee.scu.entities.Account;
import com.hwadee.scu.entities.User;
import com.hwadee.scu.to.RecommendTo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RecommendService {
    List<RecommendTo> selectRecommend( String preferCarType);

    Account selectAccountByUsername(String username);

    User selectUserByAccountID(int accountID);
}
