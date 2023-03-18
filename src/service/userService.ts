import { getUsers } from '../models/userModel';
import { IUser } from '../interfaces';

export const getUser = async (param:IUser):Promise<number> => {
  const result = await getUsers(param);
  return result;
};

export const userLog = () => {
  console.log('user on');
};