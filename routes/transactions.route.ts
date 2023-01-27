import express from 'express';
const router = express.Router();

import { pool } from '../db';

const transactions_controller = require('../controllers/transactions.controller');

router.get('/', transactions_controller.get_transactions_get);

router.post('/', async (req, res) => {
  try {
    console.log(req.body);

    const name = req.body.name;
    const color = req.body.color;

    const response = await pool.query(
      `INSERT INTO shark (name, color) VALUES ($1, $2)`,
      [name, color]
    );

    console.log({ response });
  } catch (error) {
    console.log({ error });
  }
});

module.exports = router;
