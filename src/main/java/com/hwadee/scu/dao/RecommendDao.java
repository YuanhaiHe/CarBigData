package com.hwadee.scu.dao;

import com.hwadee.scu.entities.Account;
import com.hwadee.scu.entities.User;
import com.hwadee.scu.to.RecommendTo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RecommendDao {
    /**
     *
     Author:hyh
     */
    List<RecommendTo> selectRecommend(@Param("preferCarType") String preferCarType);

    Account selectAccountByUsername(String username);

    User selectUserByAccountID(int accountID);

}
