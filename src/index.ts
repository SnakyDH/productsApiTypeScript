import express, { Application, Request, Response } from 'express';
import { routesProduct } from './routes/product.routes';

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', routesProduct);

app.get('/', (_req: Request, res: Response) => {
  res.send('Home');
});

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);
