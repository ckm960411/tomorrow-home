'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Category } from '@/service/get-categories';

interface NavbarSubCategoryProps {
  category: Category;
}
export default function NavbarSubCategory({
  category,
}: NavbarSubCategoryProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-[100px] flex-shrink-0 flex flex-col items-center py-[12px] cursor-pointer"
    >
      <Image
        src={category.resized_image_url}
        alt={category.item_desc}
        width={100}
        height={1800}
        className="w-[80px] h-[80px]"
      />
      <p
        className={`text-[14px] font-medium ${
          isHovering ? 'text-main' : 'text-gray-800'
        }`}
      >
        {category.title}
      </p>
    </div>
  );
}
