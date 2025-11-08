package com.fintech.service;

import com.fintech.model.Wallet;
import com.fintech.repository.WalletRepository;
import com.fintech.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class WalletService {

    @Autowired
    private WalletRepository walletRepository;

    public List<Wallet> getAllWallets() {
        return walletRepository.findAll();
    }

    public Wallet getWalletById(Long id) {
        return walletRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Wallet not found with id " + id));
    }

    public List<Wallet> getWalletsByUserId(Long userId) {
        return walletRepository.findByUserId(userId);
    }

    public Wallet createWallet(Wallet wallet) {
        return walletRepository.save(wallet);
    }

    public Wallet updateWallet(Long id, Wallet walletDetails) {
        Wallet wallet = getWalletById(id);
        wallet.setName(walletDetails.getName());
        wallet.setBalance(walletDetails.getBalance());
        wallet.setUser(walletDetails.getUser());
        return walletRepository.save(wallet);
    }

    public void deleteWallet(Long id) {
        Wallet wallet = getWalletById(id);
        walletRepository.delete(wallet);
    }
}
