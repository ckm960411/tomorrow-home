import React from 'react';

export default function ProductDetailTabMenu() {
  return (
    <div className="bg-gray-50 border border-gray-100">
      <div className="max-w-[1256px] mx-auto px-[60px] flex">
        <button className="px-[40px] py-[16px] text-main text-[14px] font-bold border-b-2 border-main">
          상품정보
        </button>
        <button className="px-[40px] py-[16px] text-gray-600 text-[14px] font-bold">
          리뷰
        </button>
        <button className="px-[40px] py-[16px] text-gray-600 text-[14px] font-bold">
          문의
        </button>
        <button className="px-[40px] py-[16px] text-gray-600 text-[14px] font-bold">
          배송/환불
        </button>
        <button className="px-[40px] py-[16px] text-gray-600 text-[14px] font-bold">
          추천
        </button>
      </div>
    </div>
  );
}
