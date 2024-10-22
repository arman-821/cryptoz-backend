"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// src/models/User.ts
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    ethereumAddress: { type: String, required: true },
    privateKey: { type: String, required: true }, // Optional for non-custodial wallets
    balance: { type: Number, default: 0 },
});
exports.User = (0, mongoose_1.model)('User', userSchema);
