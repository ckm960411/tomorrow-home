import { getCategories } from '@/service/get-categories';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

export default async function Categories() {
  const { categories } = await getCategories();

  return (
    <div className="max-w-[1256px] mx-auto px-[60px] relative mt-[40px]">
      <p className="text-[20px] font-bold text-gray-800 mb-[16px]">카테고리</p>
      <div className="flex items-center max-w-[1176px] mx-auto overflow-x-auto">
        {categories.map((category) => (
          <Link
            href="/"
            key={category.id}
            className="flex-shrink-0 p-[16px] flex flex-col items-center gap-[16px]"
          >
            <Image
              src={category.resized_image_url}
              alt={category.title}
              width={80}
              height={80}
            />
            <p className="text-[14px] font-semibold text-gray-800">
              {category.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="max-w-[1176px] mx-auto w-full absolute inset-0">
        <button className="w-[40px] h-[40px] flex items-center justify-center bg-gray-400 bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-70 absolute top-1/2 left-0 translate-y-[-50%]">
          <MdOutlineArrowBackIosNew className="text-white" />
        </button>
        <button className="w-[40px] h-[40px] flex items-center justify-center bg-gray-400 bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-70 absolute top-1/2 right-0 translate-y-[-50%]">
          <MdOutlineArrowBackIosNew className="text-white rotate-180" />
        </button>
      </div>
    </div>
  );
}
