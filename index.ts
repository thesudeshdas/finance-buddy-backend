import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// env var configs
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

// API rotues
const transactionsRouter = require('./routes/transactions.route');

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// json
app.use(express.json());
app.set('json spaces', 2);

// charset
app.use((req, res, next) => {
  res.contentType('application/json; charset=utf-8');
  next();
});

app.use('/transactions', transactionsRouter);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
