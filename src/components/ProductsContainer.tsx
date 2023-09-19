'use client';

import { ProductOrder, getProductOrderKorean } from '@/service/get-products';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { GoTriangleDown } from 'react-icons/go';
import ProductList from './ProductList';

export default function ProductsContainer() {
  const [productOrder, setProductOrder] = useState<ProductOrder>(
    ProductOrder.popular
  );

  return (
    <div className="max-w-[1256px] mx-auto px-[60px] mt-[40px] flex flex-col gap-[16px]">
      <p className="text-[20px] font-bold text-gray-800">인기상품</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[2px] bg-gray-200 rounded-md py-[6px] px-[8px]">
          <span className="text-gray-600 text-[14px]">배송</span>
          <FiChevronDown className="text-gray-600" />
        </div>
        <div className="flex items-center gap-[1px]">
          <span className="text-gray-500 text-[12px]">
            {getProductOrderKorean(productOrder)}
          </span>
          <GoTriangleDown className="text-gray-500" />
        </div>
      </div>
      <ProductList productOrder={productOrder} />
    </div>
  );
}
