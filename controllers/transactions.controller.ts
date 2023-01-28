import { Request, Response } from 'express';

import { pool } from '../db';

// get all transactions
exports.get_transactions_get = async (req: Request, res: Response) => {
  try {
    const response = await pool.query('SELECT * FROM shark');

    return res.status(200).json({
      success: true,
      message: 'Successfully fetched shark table',
      transactions: response.rows,
    });
  } catch (error) {
    console.error('yahan aaya', error);
  }
};

// add a transaction
exports.add_transaction_post = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const color = req.body.color;

    const response = await pool.query(
      `INSERT INTO shark (name, color) VALUES ($1, $2) RETURNING *`,
      [name, color]
    );

    return res.status(200).json({
      success: true,
      message: 'Successfully fetched shark table',
      addedTransaction: response.rows[0],
    });
  } catch (error) {
    console.error('ab yahan pe', error);
  }
};
