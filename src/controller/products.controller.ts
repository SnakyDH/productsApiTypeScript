import { Request, Response } from 'express';

import { data } from '../data/products';
import { Product } from '../model/Product';

export const getAllProducts = (_req: Request, res: Response) => {
  if (data.length !== 0) {
    return res
      .status(200)
      .json({ message: '[getAll]: Successful operation', data });
  }
  return res.status(404).json({ message: '[error]: Products not found' });
};

export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const product = data.find((product: Product) => product.id === Number(id));
  if (product) {
    return res
      .status(200)
      .json({ message: '[get]: Successful operation', data: product });
  }
  return res.status(404).json({ message: '[error]: Products not found' });
};

export const createProduct = (req: Request, res: Response) => {
  const { nombre, valor }: Product = req.body;
  const newId = data.length > 0 ? data.length + 1 : 1;
  const newItem: Product = {
    id: newId,
    nombre,
    valor,
    enStock: false,
    createdOn: new Date(),
  };
  data.push(newItem);
  return res.status(201).json(newItem);
};

export const editProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, valor, enStock } = req.body;

  const productIndex = data.findIndex(
    (product: Product) => product.id === Number(id)
  );
  if (productIndex) {
    const product: Product | undefined = data.find(
      (product: Product) => product.id === Number(id)
    );
    const productUpdated: Product = {
      id: Number(id),
      nombre,
      valor,
      enStock,
    };
    data.splice(productIndex, 1, productUpdated);
    return res
      .status(204)
      .json({ message: '[edit]: Successful operation', data: product });
  }
  return res.status(404).json({ message: '[error]: Products not found' });
};

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const product = data.find((product: Product) => product.id === Number(id));
  if (product) {
    const targetIndex = data.indexOf(product);
    data.splice(targetIndex, 1);
    return res
      .status(204)
      .json({ message: '[delete]: Successful operation', data: product });
  }
  return res.status(404).json({ message: '[error]: Products not found' });
};
