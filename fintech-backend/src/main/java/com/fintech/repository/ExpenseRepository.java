package com.fintech.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fintech.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByWalletId(Long walletId);
}
