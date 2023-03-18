import { Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import { getUser } from '../service/userService';

export const getUsers = async (req: Request, res: Response) => {
  const jwtConfig: Jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const jswtSecret = process.env.SECRET || 'secret';
  const jwtToken = Jwt.sign(req.body, jswtSecret, jwtConfig);

  await getUser(req.body);
  res.status(201).json({ token: jwtToken });
};

export const userLog = () => {
  console.log('user on');
};