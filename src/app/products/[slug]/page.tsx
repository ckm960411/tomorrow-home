import { getProductById } from '@/service/get-product';
import { Product } from '@/service/get-today-deals';
import React from 'react';

export default async function ProductPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product: Product = await getProductById(slug);

  if (!product) {
    return <div>404 NOT FOUND</div>;
  }

  return <div className="max-w-[1256px] mx-auto px-[60px]">{product.name}</div>;
}
