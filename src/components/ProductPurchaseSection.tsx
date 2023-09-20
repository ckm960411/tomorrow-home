import React from 'react';
import {
  BsBookmark,
  BsShare,
  BsFillStarFill,
  BsDownload,
  BsBoxSeam,
  BsChevronRight,
} from 'react-icons/bs';
import { TbAlertCircle } from 'react-icons/tb';
import { MdOutlineHomeWork } from 'react-icons/md';
import { Product } from '@/service/get-today-deals';
import Image from 'next/image';

interface ProductPurchaseSectionProps {
  product: Product;
}
export default function ProductPurchaseSection({
  product,
}: ProductPurchaseSectionProps) {
  return (
    <div>
      <p className="text-[14px] font-medium text-gray-600">
        {product.brand_name}
      </p>
      <div className="flex gap-[12px] mt-[8px]">
        <p className="text-[22px] font-medium text-gray-800">{product.name}</p>
        <BsBookmark className="text-[32px] text-gray-500" />
        <BsShare className="text-[32px] text-gray-500" />
      </div>
      <div className="flex items-center gap-[16px] mt-[8px]">
        <div className="flex items-center gap-[4px]">
          {Array.from({ length: Math.round(product.review_avg) }).map(
            (_, i) => (
              <BsFillStarFill key={i} className="text-main" />
            )
          )}
        </div>
        <p className="text-main text-[14px] font-semibold">nnn개 리뷰</p>
      </div>
      <div className="flex items-center gap-[8px] mt-[8px]">
        <span className="text-[16px] text-gray-500">
          {100 -
            Math.floor((product.selling_price / product.original_price) * 100)}
          %
        </span>
        <span className="text-[16px] text-gray-300 line-through">
          {product.original_price.toLocaleString('en')}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <p className="text-[32px] text-gray-800 font-bold">
            {product.selling_price.toLocaleString('en')}원
          </p>
          {product.is_special_price && (
            <div className="bg-red-400 text-[12px] text-white py-[2px] px-[4px] rounded-sm">
              특가
            </div>
          )}
        </div>
        <button className="flex items-center gap-[4px] bg-red-400 text-white py-[6px] px-[12px] rounded-md">
          <span className="text-[14px]">쿠폰 받기</span>
          <BsDownload />
        </button>
      </div>
      <div className="flex gap-[16px] mt-[8px]">
        <span className="text-gray-400 text-[14px]">혜택</span>
        <div className="text-[14px] text-gray-800 flex flex-col gap-[4px]">
          <p>
            <span className="font-bold">n,nnnP</span> 적립 (WELCOME 0.1% 적립)
          </p>
          <p>
            최대 <span className="font-bold">n%</span> 결제할인 (비씨)
          </p>
          <p>월 nnn,nnn원 (n개월) 무이자할부</p>
        </div>
      </div>
      <div className="flex gap-[16px] mt-[8px]">
        <span className="text-gray-400 text-[14px]">배송</span>
        <div className="text-[14px] text-gray-800 flex flex-col gap-[4px]">
          <p className="font-bold">무료배송</p>
          <p>업체직접배송</p>
          <p className="text-gray-400">제주도/도서산간 지역 배송 불가</p>
        </div>
      </div>
      <div className="pl-[36px] mt-[16px]">
        <div className="flex items-center gap-[8px] bg-gray-100 rounded-md p-[12px]">
          <BsBoxSeam />
          <p className="text-[14px] text-gray-500 grow">
            <span className="text-main font-bold">nn/nn(월)</span> 이내 도착
            예정
          </p>
          <TbAlertCircle className="text-gray-500" />
        </div>
      </div>
      <hr className="my-[16px]" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <MdOutlineHomeWork />
          <span className="text-[14px] text-gray-600 font-bold">
            {product.brand_name}
          </span>
        </div>
        <button className="flex items-center gap-[8px] bg-gray-100 rounded-full py-[4px] px-[12px]">
          <span className="text-[14px] text-gray-500 font-semibold">
            브랜드홈
          </span>
          <BsChevronRight className="text-gray-500" />
        </button>
      </div>
      <div className="bg-slate-50 mt-[32px] rounded-md p-[16px] flex flex-col gap-[24px]">
        <p className="text-[14px] text-gray-600">단일상품</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-white border border-gray-200 rounded-md">
            <button className="flex items-center justify-center w-[24px] h-[24px]">
              -
            </button>
            <p className="flex items-center justify-center w-[24px] h-[24px]">
              1
            </p>
            <button className="flex items-center justify-center w-[24px] h-[24px]">
              +
            </button>
          </div>
          <div className="text-gray-800 font-semibold">
            {product.selling_price.toLocaleString('en')}원
          </div>
        </div>
      </div>
      <hr className="my-[16px]" />
      <div className="flex items-center justify-between">
        <span className="text-[14px] text-gray-500 font-bold">주문금액</span>
        <span className="text-[18px] font-bold">
          {product.selling_price.toLocaleString('en')}원
        </span>
      </div>
      <button className="flex items-center justify-between w-full py-[8px] px-[12px] border border-gray-200 rounded-md shadow-md mt-[16px]">
        <p>받지 않은 쿠폰이 더 있어요</p>
        <div className="flex items-center gap-[4px]">
          <span className="text-red-500 text-[14px] font-semibold">
            쿠폰 받기
          </span>
          <BsDownload className="text-[14px] text-red-500" />
        </div>
      </button>
      <div className="grid grid-cols-2 gap-[6px] mt-[16px]">
        <button className="font-bold text-main py-[16px] border border-main rounded-sm">
          장바구니
        </button>
        <button className="font-bold bg-main text-white py-[16px] rounded-sm">
          바로구매
        </button>
      </div>
      <Image
        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/production_promotions/event/169476124896375668.png?gif=1&w=480&webp=1"
        alt=""
        width={600}
        height={100}
        className="mt-[32px]"
      />
    </div>
  );
}
