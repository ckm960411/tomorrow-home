'use client';

import { PopularKeyword } from '@/service/popular-keywords';
import { useEffect, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import PopularKeywordItem from './PopularKeywordItem';

interface CurrentPopularKeywordProps {
  keywords: PopularKeyword[];
  onOpen: () => void;
}
export default function CurrentPopularKeyword({
  keywords,
  onOpen,
}: CurrentPopularKeywordProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (currentIndex === keywords.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-[192px] h-[30px] overflow-hidden relative cursor-pointer">
      <div
        className="w-full h-full"
        style={{
          transform: `translateY(-${currentIndex * 30}px)`,
          transitionDuration: '500ms',
        }}
      >
        {keywords.map((keyword, index) => (
          <PopularKeywordItem
            key={keyword.key}
            order={index + 1}
            keyword={keyword}
          />
        ))}
      </div>
      <div
        className="w-[30px] h-[30px] flex items-center justify-center absolute top-1/2 right-0 -translate-y-1/2"
        onMouseEnter={onOpen}
      >
        <GoChevronDown className="text-gray-600 text-[20px]" />
      </div>
    </div>
  );
}
