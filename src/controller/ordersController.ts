import { Request, Response } from 'express';
import { getAllOrder } from '../service/ordersService';

export const getAllOrders = async (_req:Request, res:Response) => {
  const result = await getAllOrder();

  return res.status(200).json(result);
};

export const userLog = () => {
  console.log('user on');
};
