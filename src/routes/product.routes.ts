import { Router } from 'express';
import {
  getAllProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct,
} from '../controller/products.controller';

const routesProduct = Router();

routesProduct.get('/', getAllProducts);
routesProduct.get('/:id', getProduct);
routesProduct.post('/', createProduct);
routesProduct.put('/:id', editProduct);
routesProduct.delete('/:id', deleteProduct);

export { routesProduct };
