// src/services/ethereumService.ts
import { ethers, formatEther, parseEther } from 'ethers'; // Explicitly import 'providers'
import dotenv from 'dotenv';

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.CLOUDFLARE_GATEWAY); // Use ethers.providers here

// Create a new wallet for the user
export const createWallet = () => {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
};

// Get the balance of a wallet
export const getBalance = async (address: string) => {
  const balance = await provider.getBalance(address);
  return formatEther(balance);
};

// Send Ethereum from one wallet to another
export const sendTransaction = async (privateKey: string, toAddress: string, amount: string) => {
  const wallet = new ethers.Wallet(privateKey, provider);
  const transaction = {
    to: toAddress,
    value: parseEther(amount),
  };

  const txResponse = await wallet.sendTransaction(transaction);
  return txResponse.hash;
};
