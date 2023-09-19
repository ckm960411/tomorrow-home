import { Product } from '@/service/get-today-deals';
import React from 'react';
import Image from 'next/image';
import { BsFillStarFill } from 'react-icons/bs';
import departureTodayImg from '../../public/departure_today.png';
import tomorrowHomeDeliveryImg from '../../public/tomorrow-home-delivery.svg';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Image
        src={product.resized_image_url}
        alt={product.name}
        width={200}
        height={200}
        className="w-full rounded-md"
      />
      <div className="p-[8px] flex flex-col gap-[2px] items-start">
        <span className="text-[12px] text-gray-400">{product.brand_name}</span>
        <p className="text-[13px] text-gray-600">{product.name}</p>
        <div className="flex items-center gap-[4px]">
          <span className="text-main text-[16px] font-bold">
            {Math.floor((product.selling_cost / product.original_price) * 100)}%
          </span>
          <span className="text-gray-800 font-bold">
            {product.selling_cost.toLocaleString('en')}
          </span>
        </div>
        <div className="flex items-center gap-[4px]">
          <BsFillStarFill className="text-[12px] text-main" />
          <span className="text-[12px] font-semibold">
            {product.review_avg}
          </span>
          <span className="text-[12px] text-gray-400 font-medium">
            리뷰 {product.review_count.toLocaleString('en')}
          </span>
        </div>
        {product.is_departure_today && (
          <Image
            src={departureTodayImg.src}
            alt="오늘출발"
            width={100}
            height={60}
            className="w-[60px] h-[15px]"
          />
        )}
        {product.is_retail_delivery && (
          <Image
            src={tomorrowHomeDeliveryImg}
            alt="오늘의집배송"
            width={100}
            height={60}
            className="w-[60px] h-[15px]"
          />
        )}
        <div className="flex items-start flex-col gap-[4px] mt-[8px]">
          {product.delivery_start_at && (
            <p className="text-[12px] text-blue-500">
              {product.delivery_start_at.template.text.replace(
                '%s',
                product.delivery_start_at.template.values[0]
              )}
            </p>
          )}
          <div className="flex items-center flex-wrap gap-[4px]">
            {product.free_delivery && (
              <div className="text-[11px] text-gray-600 bg-gray-200 py-[1px] px-[4px] rounded-sm">
                무료배송
              </div>
            )}
            {product.is_special_price && (
              <div className="text-[11px] text-white bg-red-400 py-[1px] px-[4px] rounded-sm">
                특가
              </div>
            )}
          </div>
          {product.coupon_badge && (
            <div className="text-[11px] text-gray-800 border border-gray-200 rounded-sm py-[1px] px-[4px] flex items-center gap-[2px]">
              <Image
                src={product.coupon_badge.image}
                alt={product.coupon_badge.title}
                width={20}
                height={20}
                className="w-[12px]"
              />
              <span>{product.coupon_badge.title}</span>
            </div>
          )}
          {product.benefit_badges.map((badge, i) => (
            <div
              key={i}
              className="text-[11px] text-gray-800 border border-gray-200 rounded-sm py-[1px] px-[4px] flex items-center gap-[2px]"
            >
              <Image
                src={badge.image}
                alt={badge.title}
                width={20}
                height={20}
                className="w-[12px]"
              />
              <span>{badge.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
