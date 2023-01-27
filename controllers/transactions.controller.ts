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
