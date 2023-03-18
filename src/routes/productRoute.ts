import express from 'express';
import { addProducts, getAllProducts } from '../controller/productController';

const route = express.Router();

route.post('/', addProducts);
route.get('/', getAllProducts);

export default route;