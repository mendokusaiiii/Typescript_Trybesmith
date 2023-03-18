import express from 'express';
import { addProducts } from '../controller/productController';

const route = express.Router();

route.post('/', addProducts);

export default route;