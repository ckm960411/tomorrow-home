import { Product } from '@/service/get-today-deals';
import React from 'react';

export default function ProductDetailSideOptionBox({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="bg-slate-50 mt-[32px] rounded-md p-[16px] flex flex-col gap-[24px] sticky top-[60px]">
      <p className="text-[14px] text-gray-600">단일상품</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center bg-white border border-gray-200 rounded-md">
          <button className="flex items-center justify-center w-[24px] h-[24px]">
            -
          </button>
          <p className="flex items-center justify-center w-[24px] h-[24px]">
            1
          </p>
          <button className="flex items-center justify-center w-[24px] h-[24px]">
            +
          </button>
        </div>
        <div className="text-gray-800 font-semibold">
          {product.selling_price.toLocaleString('en')}원
        </div>
      </div>
    </div>
  );
}
