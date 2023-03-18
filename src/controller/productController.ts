import { Request, Response } from 'express';
import { setAddProducts, getAllProductsList } from '../service/productService';

export const addProducts = async (req:Request, res: Response) => {
  const { name, amount } = req.body;
  const id = await setAddProducts({ name, amount });

  return res.status(201).json({ id, name, amount });
};

export const getAllProducts = async (_req:Request, res: Response) => {
  const allProducts = await getAllProductsList();
  
  return res.status(200).json(allProducts);
};