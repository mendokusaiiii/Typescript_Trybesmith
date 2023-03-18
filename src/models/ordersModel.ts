import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { IOrder } from '../interfaces';

interface Orders extends IOrder, RowDataPacket{}

export const getAllOrders = async ():Promise<Orders[]> => {
  const selectOrders = `SELECT 
  ord.id as id,
  ord.user_id as userId,
  JSON_ARRAYAGG(pro.id) as productsIds
  FROM Trybesmith.orders as ord 
  INNER JOIN Trybesmith.products as pro ON
  pro.order_id = ord.id
  GROUP BY ord.id, ord.user_id `;

  const [result] = await connection.execute<Orders[]>(selectOrders);
  
  return result;
};

export const userLog = () => {
  console.log('user on');
};
