export interface Category {
  id: number;
  title: string;
  hash: string;
  image_url: string;
  original_image_url: string;
  resized_image_url: string;
  count: number;
  has_featured_html: boolean;
  item_desc: string;
}
export const getCategories = async () => {
  const result: { categories: Category[] } = await fetch(
    'http://localhost:3000/api/get-categories'
  ).then((res) => res.json());

  return result;
};
