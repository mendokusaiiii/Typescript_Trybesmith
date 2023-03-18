import { getAllOrders } from '../models/ordersModel';

export const getAllOrder = async () => {
  const orders = await getAllOrders();

  return orders;
};

export const userLog = () => {
  console.log('user on');
};
