import { ProductOrder, getProducts } from '@/service/get-products';
import { Product } from '@/service/get-today-deals';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

interface ProductListProps {
  productOrder: ProductOrder;
}
export default function ProductList({ productOrder }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts(productOrder)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, [productOrder]);

  return (
    <div className="grid grid-cols-4 gap-[16px]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
