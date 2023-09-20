import ProductPurchaseSection from '@/components/ProductPurchaseSection';
import { getProductById } from '@/service/get-product';
import { Product } from '@/service/get-today-deals';
import Image from 'next/image';
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

  return (
    <div className="max-w-[1256px] mx-auto px-[60px]">
      <div className="mt-[60px] flex gap-[48px]">
        <Image
          src={product.resized_image_url}
          alt={product.name}
          width={600}
          height={600}
          className="w-[560px] h-[560px] rounded-md"
        />
        <ProductPurchaseSection product={product} />
      </div>
    </div>
  );
}
