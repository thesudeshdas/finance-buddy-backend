import { Request, Response } from 'express';

import { pool } from '../db';

// get all accounts
exports.get_accounts_get = async (req: Request, res: Response) => {
  try {
    const query = `SELECT * FROM accounts`;

    const response = await pool.query(query);

    return res.status(200).json({
      success: true,
      message: 'Successfully fetched all the accounts',
      accounts: response.rows,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Some server error while retrieving accounts',
      error,
    });
  }
};

// add an account
exports.add_account_post = async (req: Request, res: Response) => {
  try {
    const { account, userId } = req.body;

    const query = `INSERT INTO accounts ("account", "user")
    VALUES ($1, $2) RETURNING *`;

    const values = [account, userId];

    const response = await pool.query(query, values);

    return res.status(200).json({
      success: true,
      message: 'Successfully added a new account',
      account: response.rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Some server error while adding an account',
      error,
    });
  }
};

// delete account
exports.delete_account_delete = async (req: Request, res: Response) => {
  try {
    const { accountToDelete } = req.body;

    const query = `DELETE FROM accounts WHERE account = $1 RETURNING a_id`;

    const response = await pool.query(query, [accountToDelete]);

    return res.status(200).json({
      success: true,
      message: 'Successfully deleted the account',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Some error whiule deleting account',
      error,
    });
  }
};
