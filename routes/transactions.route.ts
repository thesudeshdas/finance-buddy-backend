import express from 'express';
const router = express.Router();

const transactions_controller = require('../controllers/transactions.controller');

router.get('/', transactions_controller.get_transactions_get);

router.post('/', transactions_controller.add_transaction_post);

module.exports = router;
