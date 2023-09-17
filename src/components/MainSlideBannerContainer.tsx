'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

interface MainSlideBannerContainerProps {
  banners: string[];
}
export default function MainSlideBannerContainer({
  banners,
}: MainSlideBannerContainerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === banners.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="max-w-[1800px] mx-auto overflow-hidden relative">
      <div
        className="flex items-center max-w-[1800px] mx-auto duration-200"
        style={{ transform: `translateX(${activeIndex * -1 * 100}%)` }}
      >
        {banners.map((image: string, i: number) => (
          <Image
            key={i}
            src={`data:image/avif;base64,${image}`}
            alt={`메인 배너 ${i + 1}`}
            width={1280}
            height={600}
            className={`w-[1800px] mx-auto object-cover`}
          />
        ))}
      </div>
      <div className="absolute top-0 left-1/2 translate-x-[-50%] max-w-[1280px] h-full w-full px-[72px] flex justify-between items-center">
        <div
          onClick={() => {
            if (activeIndex === 0) {
              setActiveIndex(banners.length - 1);
            } else {
              setActiveIndex((prev) => prev - 1);
            }
          }}
          className="w-[40px] h-[40px] flex items-center justify-center bg-gray-400 bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-70"
        >
          <MdOutlineArrowBackIosNew className="text-white" />
        </div>
        <div
          onClick={() => {
            if (activeIndex === banners.length - 1) {
              setActiveIndex(0);
            } else {
              setActiveIndex((prev) => prev + 1);
            }
          }}
          className="w-[40px] h-[40px] flex items-center justify-center bg-gray-400 bg-opacity-30 rounded-full cursor-pointer hover:bg-opacity-70"
        >
          <MdOutlineArrowBackIosNew className="text-white rotate-180" />
        </div>
        <div
          className="absolute bg-gray-400 bottom-[16px] text-white text-[14px] py-[2px] px-[12px] rounded-xl bg-opacity-50"
          style={{ left: `calc(100% - 120px)` }}
        >
          {activeIndex + 1} / {banners.length}
        </div>
      </div>
    </div>
  );
}
