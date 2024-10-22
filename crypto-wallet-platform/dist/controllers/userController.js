"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendUserTransaction = exports.getUserBalance = exports.createUser = void 0;
const User_1 = require("../models/User");
const ethereumService_1 = require("../services/ethereumService");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = req.body;
        const { address, privateKey } = (0, ethereumService_1.createWallet)();
        const newUser = new User_1.User({
            username,
            ethereumAddress: address,
            privateKey, // Store private key only if custodial
        });
        yield newUser.save();
        res.status(201).json({ address });
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});
exports.createUser = createUser;
const getUserBalance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { username } = req.params;
        const user = yield User_1.User.findOne({ username });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        }
        if (!(user === null || user === void 0 ? void 0 : user.ethereumAddress)) {
            res.status(400).json({ error: 'Ethereum address not found' });
        }
        const balance = yield (0, ethereumService_1.getBalance)((_a = user === null || user === void 0 ? void 0 : user.ethereumAddress) !== null && _a !== void 0 ? _a : '');
        res.status(200).json({ balance });
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching balance' });
    }
});
exports.getUserBalance = getUserBalance;
const sendUserTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { username } = req.params;
        const { toAddress, amount } = req.body;
        const user = yield User_1.User.findOne({ username });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        }
        const txHash = yield (0, ethereumService_1.sendTransaction)((_a = user === null || user === void 0 ? void 0 : user.privateKey) !== null && _a !== void 0 ? _a : '', toAddress, amount);
        res.status(200).json({ transactionHash: txHash });
    }
    catch (error) {
        res.status(500).json({ error: 'Error sending transaction' });
    }
});
exports.sendUserTransaction = sendUserTransaction;
