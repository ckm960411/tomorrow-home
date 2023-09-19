export interface Product {
  id: number;
  name: string;
  benefit_badges: {
    image: string;
    title: string;
    ozip_title: string;
    discount_ratio: string;
  }[];
  brand_id: number;
  brand_name: string;
  cost: number;
  coupon_badge: {
    image: string;
    title: string;
  };
  free_delivery: boolean;
  image_url: string;
  original_price: number;
  resized_image_url: string;
  review_avg: number;
  review_count: number;
  selling_cost: number;
  selling_price: number;
  is_special_price: boolean;
  is_departure_today: boolean;
  is_retail_delivery: boolean;
  delivery_start_at: {
    template: {
      text: string;
      values: string[];
    };
  } | null;
}
export const getTodayDeals = async () => {
  const result: Product[] = await fetch('http://localhost:3000/api/today-deals')
    .then((res) => res.json())
    .catch(console.error);

  return result;
};
