import React from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Image from 'next/image';

export default function ProductDetailContent() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <span className="text-[18px] font-bold">유저들의 스타일링샷</span>
          <span className="text-[18px] font-bold text-main">nn</span>
        </div>
        <HiOutlineChevronRight className="text-[22px] text-gray-600" />
      </div>
      <div className="mt-[16px]">
        <div className="grid grid-cols-2 gap-[6px]">
          <Image
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/169314076175940046.jpeg?gif=1&w=480&webp=1"
            alt=""
            width={300}
            height={240}
            className="w-full h-[280px] object-cover rounded-md"
          />
          <Image
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/169314076175940046.jpeg?gif=1&w=480&webp=1"
            alt=""
            width={300}
            height={240}
            className="w-full h-[280px] object-cover rounded-md"
          />
          <Image
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/169314076175940046.jpeg?gif=1&w=480&webp=1"
            alt=""
            width={300}
            height={240}
            className="w-full h-[280px] object-cover rounded-md"
          />
          <Image
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/169314076175940046.jpeg?gif=1&w=480&webp=1"
            alt=""
            width={300}
            height={240}
            className="w-full h-[280px] object-cover rounded-md"
          />
        </div>
        <div className="flex items-center justify-center gap-[6px] my-[16px]">
          <div className="w-[6px] h-[6px] bg-gray-800 rounded-full" />
          <div className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
          <div className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
          <div className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
          <div className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
        </div>
        <div className="flex items-center justify-center">
          <button className="text-main text-[14px] border border-main rounded-sm py-[8px] w-[400px] font-bold">
            스타일링샷 전체보기
          </button>
        </div>
        <p className="text-[12px] text-gray-300 text-center mt-[12px]">
          해당 상품을 사용하는 유저들이 직접 태그한 콘텐츠로, 스타일링샷 속
          상품과 실제 판매 상품이 다를 수 있습니다.
        </p>
      </div>
      <div className="w-full h-[80px]" />
      <div>
        <p className="text-[18px] font-bold">상품정보</p>
      </div>
      <div className="pt-[16px]">
        <Image
          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/productions/notice/169511331585949931.png?gif=1&w=720&webp=1"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://gi.esmplus.com/sycplus/appliance_07.gif"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://ai.esmplus.com/sycplus/notice/lg_seller_news_ebay.jpg"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://ai.esmplus.com/sycplus/notice/date_pick/deli_date_pick.jpg"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://ai.esmplus.com/sycplus/notice/02_safe_number_check.jpg"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://ai.esmplus.com/sycplus/notice/product/27ART10CKPL_ai-use_banner.jpg"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_why.jpg"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_00.jpg"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_01.gif"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_02.jpg"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_11.jpg"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_size.jpg"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
        <Image
          src="https://open.lge.co.kr/link/2023/usp/01_TV/05_LIFESTYLE/27ART10CKPL/27ART10CKPL_spec.jpg"
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
      </div>
    </div>
  );
}
