import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { IProduct } from '../interfaces';

interface CreateProducts extends IProduct, RowDataPacket{}

export const addProducts = async ({ name, amount }: IProduct):Promise<number> => {
  const insertDb = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(insertDb, [name, amount]);
  return insertId;
};

export const getAllProducts = async (): Promise<CreateProducts[]> => {
  const selectFromDb = 'SELECT id, name, amount FROM Trybesmith.products';
  const [result] = await connection
    .execute<CreateProducts[]>(selectFromDb);
  return result;
};