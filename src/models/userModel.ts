import { ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
import connection from './connection';

export const getUsers = async ({ username, vocation, level, password }:IUser):Promise<number> => {
  const insertUsers = `INSERT INTO Trybesmith.users
   (username, vocation, level, password) VALUES (?,?,?,?)`;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(insertUsers, [username, vocation, level, password]);
  return insertId;
};

export const userLog = () => {
  console.log('user on');
};