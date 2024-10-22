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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTransaction = exports.getBalance = exports.createWallet = void 0;
// src/services/ethereumService.ts
const ethers_1 = require("ethers"); // Explicitly import 'providers'
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const provider = new ethers_1.ethers.JsonRpcProvider(process.env.CLOUDFLARE_GATEWAY); // Use ethers.providers here
// Create a new wallet for the user
const createWallet = () => {
    const wallet = ethers_1.ethers.Wallet.createRandom();
    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
    };
};
exports.createWallet = createWallet;
// Get the balance of a wallet
const getBalance = (address) => __awaiter(void 0, void 0, void 0, function* () {
    const balance = yield provider.getBalance(address);
    return (0, ethers_1.formatEther)(balance);
});
exports.getBalance = getBalance;
// Send Ethereum from one wallet to another
const sendTransaction = (privateKey, toAddress, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const wallet = new ethers_1.ethers.Wallet(privateKey, provider);
    const transaction = {
        to: toAddress,
        value: (0, ethers_1.parseEther)(amount),
    };
    const txResponse = yield wallet.sendTransaction(transaction);
    return txResponse.hash;
});
exports.sendTransaction = sendTransaction;
