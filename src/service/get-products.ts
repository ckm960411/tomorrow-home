export enum ProductOrder {
  weekly_buy = 'weekly_buy',
  popular = 'popular',
  review = 'review',
  card = 'card',
  max_cost = 'max_cost',
  cost = 'cost',
  recent = 'recent',
}
export const getProducts = async ({
  order = ProductOrder.popular,
  page = 1,
  per = 24,
}: {
  order?: ProductOrder;
  page?: number;
  per?: number;
}) => {
  await fetch(
    `https://ohou.se/store/category.json?v=2&order=${order}&page=${page}&per=${per}`
  );
};

export const getProductOrderKorean = (order: ProductOrder) => {
  return {
    weekly_buy: '판매순',
    popular: '인기순',
    review: '많은 리뷰순',
    card: '유저사진 많은순',
    max_cost: '높은가격순',
    cost: '낮은가격순',
    recent: '최신순',
  }[order];
};
