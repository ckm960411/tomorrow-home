import Link from 'next/link';
import React from 'react';
import PopularKeywords from './PopularKeywords';

const navTitles = [
  '쇼핑홈',
  '카테고리',
  '베스트',
  '오늘의딜',
  '리퍼마켓',
  '오!굿즈',
  '빠른배송',
  '오!쇼룸',
  '프리미엄',
  '기획전',
];

export default async function NavbarCategories() {
  return (
    <div className="border-b border-gray-200">
      <div className="max-w-[1256px] mx-auto h-[52px] px-[60px] flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          {navTitles.map((title) => (
            <button
              key={title}
              className={`h-[52px] font-semibold py-[12px] px-[6px] ${
                title === '쇼핑홈' ? 'text-main border-b-2 border-main' : ''
              }`}
            >
              <Link href="/">{title}</Link>
            </button>
          ))}
        </div>
        <PopularKeywords />
      </div>
    </div>
  );
}
