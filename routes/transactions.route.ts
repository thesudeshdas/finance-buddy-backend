import express from 'express';
const router = express.Router();

import { pool } from '../db';

router.get('/', async (req, res) => {
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
});

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
