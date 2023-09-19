import { getTodayDeals } from '@/service/get-today-deals';
import Image from 'next/image';
import React from 'react';

import ItemCard from './ProductCard';

export default async function TodayDealsContainer() {
  const todayDeals = await getTodayDeals();

  return (
    <div className="max-w-[1256px] mx-auto px-[60px]">
      <div className="flex items-center justify-between mb-[16px]">
        <p className="text-[20px] font-bold text-gray-800">오늘의딜</p>
        <button className="text-red-400 text-[14px] font-medium">더보기</button>
      </div>
      <div className="grid grid-cols-4 gap-[16px]">
        {todayDeals.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
