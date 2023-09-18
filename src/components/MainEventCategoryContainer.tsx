import { getEventCategories } from '@/service/get-event-categories';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function MainEventCategoryContainer() {
  const eventCategories = await getEventCategories();

  return (
    <div className="max-w-[1256px] mx-auto px-[60px] flex items-center justify-evenly py-[40px]">
      {eventCategories.map((category) => (
        <Link
          key={category.title}
          href="/"
          className="px-[16px] flex flex-col items-center gap-[8px]"
        >
          <Image
            src={category.image_url}
            alt={category.title}
            width={80}
            height={80}
            className="w-[60px] h-[60px] rounded-2xl"
          />
          <span className="text-16px text-gray-600">{category.title}</span>
        </Link>
      ))}
    </div>
  );
}
