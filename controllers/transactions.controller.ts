import { Request, Response } from 'express';

import { pool } from '../db';

// get all transactions
exports.get_transactions_get = async (req: Request, res: Response) => {
  try {
    const query = `
    SELECT transactions.t_id, transactions.amount, accounts.account, categories.category, transactions.type, users.name
    FROM transactions 
    JOIN accounts ON transactions.account = accounts.a_id
    JOIN users ON transactions.user = users.u_id 
    JOIN categories ON transactions.category = categories.c_id
    `;

    const response = await pool.query(query);

    return res.status(200).json({
      success: true,
      message: 'Successfully fetched shark table',
      transactions: response.rows,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Some server error while getting transactions',
      error,
    });
  }
};

// add a transaction
exports.add_transaction_post = async (req: Request, res: Response) => {
  try {
    const { amount, account, category, user, type } = req.body;

    const query = `
    INSERT INTO transactions ("amount", "account", "category", "user", "type") 
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING *
    `;

    const values = [amount, account, category, user, type];

    const response = await pool.query(query, values);

    return res.status(200).json({
      success: true,
      message: 'Successfully fetched shark table',
      addedTransaction: response.rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Some server error while adding a transaction',
      error,
    });
  }
};
