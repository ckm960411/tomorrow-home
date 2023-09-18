import { Category } from '@/service/get-categories';
import Image from 'next/image';
import React from 'react';
import NavbarSubCategory from './NavbarSubCategory';

interface NavbarSubCategoriesProps {
  categories: Category[];
}
export default function NavbarSubCategories({
  categories,
}: NavbarSubCategoriesProps) {
  return (
    <div className="max-w-[1256px] mx-auto px-[60px] z-10 absolute top-full left-0 bg-white flex items-center overflow-x-auto py-[12px]">
      {categories.map((category) => (
        <NavbarSubCategory key={category.id} category={category} />
      ))}
    </div>
  );
}
