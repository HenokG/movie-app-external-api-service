import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// const typeDefs = `#graphql
//     type Query {
//       hello: String
//     }
// `;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`🥳🥳🥳 Server is running at http://localhost:${port}`);
});
