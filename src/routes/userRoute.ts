import express from 'express';
import { getUsers } from '../controller/userController';

const route = express.Router();

route.post('/', getUsers);

export default route;