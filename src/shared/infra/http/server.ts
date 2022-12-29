/* eslint-disable no-console */
import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { errors } from 'celebrate';

const app = express();

app.use(cors({
}));

app.use(express.json());

app.use(errors());

app.get('/', async (request, response) => {
  return response.status(200).json({ message: 'server ok' });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server started!');
});
