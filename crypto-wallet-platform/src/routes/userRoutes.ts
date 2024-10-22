// src/routes/userRoutes.ts
import { Router } from 'express';
import { createUser, getUserBalance, sendUserTransaction } from '../controllers/userController';

const router = Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user and wallet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 *       500:
 *         description: Error creating user
 */
router.post('/users', createUser);

/**
 * @swagger
 * /api/users/{username}/balance:
 *   get:
 *     summary: Get user's wallet balance
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: User balance returned
 *       404:
 *         description: User not found
 *       500:
 *         description: Error fetching balance
 */
router.get('/users/:username/balance', getUserBalance);

/**
 * @swagger
 * /api/users/{username}/send:
 *   post:
 *     summary: Send Ethereum from user wallet to another address
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               toAddress:
 *                 type: string
 *               amount:
 *                 type: string
 *     responses:
 *       200:
 *         description: Transaction successful
 *       500:
 *         description: Error sending transaction
 */
router.post('/users/:username/send', sendUserTransaction);

export default router;
