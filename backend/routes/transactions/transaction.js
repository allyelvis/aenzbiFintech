const express = require('express');
const Transaction = require('../../models/Transaction');
const router = express.Router();

// Create a new transaction
router.post('/', async (req, res) => {
    const { userId, amount, transactionType } = req.body;
    const transaction = new Transaction({ userId, amount, transactionType });
    await transaction.save();
    res.status(201).send('Transaction recorded successfully');
});

// Get user transactions
router.get('/:userId', async (req, res) => {
    const transactions = await Transaction.find({ userId: req.params.userId });
    res.json(transactions);
});

module.exports = router;
