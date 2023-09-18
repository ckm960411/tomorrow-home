import { Category } from '@/service/get-categories';
import Image from 'next/image';
import React from 'react';
import NavbarSubCategory from './NavbarSubCategory';

interface NavbarSubCategoriesProps {
  categories: Category[];
  isHovering: boolean;
}
export default function NavbarSubCategories({
  categories,
  isHovering,
}: NavbarSubCategoriesProps) {
  return (
    <div
      className={`w-full z-10 absolute top-full left-1/2 translate-x-[-50%] bg-white flex items-center overflow-x-auto overflow-hidden duration-200 ${
        isHovering ? 'py-[12px] h-auto' : 'py-0 h-0'
      }`}
    >
      <div className="max-w-[1256px] px-[60px] flex items-center">
        {categories.map((category) => (
          <NavbarSubCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
