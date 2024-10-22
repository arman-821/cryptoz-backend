// src/models/User.ts
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  ethereumAddress: { type: String, required: true },
  privateKey: { type: String, required: true },  // Optional for non-custodial wallets
  balance: { type: Number, default: 0 },
});

export const User = model('User', userSchema);
