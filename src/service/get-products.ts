import { Product } from './get-today-deals';

export enum ProductOrder {
  popular = 'popular',
  recent = 'recent',
}
export const getProducts = async (order?: ProductOrder) => {
  const result: Product[] = await fetch(
    `http://localhost:3000/api/products?order=${order}`
  )
    .then((res) => res.json())
    .catch(console.error);

  return result;
};

export const getProductOrderKorean = (order: ProductOrder) => {
  return {
    popular: '인기순',
    recent: '최신순',
  }[order];
};
