import express from 'express';
import { getAllOrders } from '../controller/ordersController';

const route = express.Router();

route.get('/', getAllOrders);

export default route;