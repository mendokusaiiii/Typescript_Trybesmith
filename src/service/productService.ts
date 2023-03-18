import { addProducts, getAllProducts } from '../models/productModel';
import { IProduct } from '../interfaces';

export const setAddProducts = async (param:IProduct):Promise<number> => {
  const result = await addProducts(param);
  return result;
};
export const getAllProductsList = async ():Promise<IProduct[]> => {
  const result = await getAllProducts();
  return result;
};
