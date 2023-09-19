import { Product } from './get-today-deals';

export const getProductById = async (id: number | string) => {
  const product: Product = await fetch(
    `http://localhost:3000/api/products/${id}`
  )
    .then((res) => res.json())
    .catch(console.error);

  return product;
};
