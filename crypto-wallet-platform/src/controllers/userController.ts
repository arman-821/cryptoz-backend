// src/controllers/userController.ts
import { Request, Response } from 'express';
import { User } from '../models/User';
import { createWallet, getBalance, sendTransaction } from '../services/ethereumService';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const { address, privateKey } = createWallet();

    const newUser = new User({
      username,
      ethereumAddress: address,
      privateKey,  // Store private key only if custodial
    });

    await newUser.save();
     res.status(201).json({ address });
  } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
  }
};

export const getUserBalance = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });

    if (!user) {
        res.status(404).json({ error: 'User not found' });
    }

    if (!user?.ethereumAddress) {
       res.status(400).json({ error: 'Ethereum address not found' });
    }
    const balance = await getBalance(user?.ethereumAddress ?? '');
      res.status(200).json({ balance });
  } catch (error) {
      res.status(500).json({ error: 'Error fetching balance' });
  }
};

export const sendUserTransaction = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const { toAddress, amount } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
       res.status(404).json({ error: 'User not found' });
    }

    const txHash = await sendTransaction(user?.privateKey ?? '', toAddress, amount);
     res.status(200).json({ transactionHash: txHash });
  } catch (error) {
     res.status(500).json({ error: 'Error sending transaction' });
  }
};
