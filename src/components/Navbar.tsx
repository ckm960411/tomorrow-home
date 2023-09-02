import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import tomorrowHomeIcon from '../../public/tomorrow-home.svg';
import { BsSearch, BsCart } from 'react-icons/bs';
import { GoChevronDown } from 'react-icons/go';

const LINK_CLASSNAME = 'pt-[21px] pb-[15px] px-[5px] font-bold text-[18px]';

export default function Navbar() {
  return (
    <div className="border-b border-gray-200">
      <div className="max-w-[1256px] mx-auto h-[80px] py-[10px] px-[60px] flex items-center">
        <Link href="/" className="mr-[35px]">
          <Image src={tomorrowHomeIcon} alt="" width={74} height={30} />
        </Link>
        <ul className="flex items-center gap-[24px] flex-grow">
          <li className={LINK_CLASSNAME}>
            <Link href="/">커뮤니티</Link>
          </li>
          <li className={`${LINK_CLASSNAME} text-main`}>
            <Link href="/">쇼핑</Link>
          </li>
          <li className={LINK_CLASSNAME}>
            <Link href="/">이사/시공/생활</Link>
          </li>
        </ul>
        <div className="flex items-center gap-[24px]">
          <div className="border border-gray-200 rounded-sm w-[300px] px-[14px] flex items-center">
            <BsSearch style={{ width: 30 }} />
            <input
              placeholder="쇼핑 검색"
              className="placeholder:text-gray-300 rounded-sm h-[38px] pr-[6px] font-light"
            />
          </div>
          <Link href="/">
            <BsCart style={{ width: 22, height: 22 }} />
          </Link>
          <div className="flex items-center gap-[8px]">
            <Link href="/" className="text-[14px] text-gray-600">
              로그인
            </Link>
            <div className="w-[1px] h-[18px] bg-gray-100" />
            <Link href="/" className="text-[14px] text-gray-600">
              회원가입
            </Link>
            <div className="w-[1px] h-[18px] bg-gray-100" />
            <Link href="/" className="text-[14px] text-gray-600">
              고객센터
            </Link>
          </div>
          <button className="w-[92px] h-[40px] bg-main text-white text-[14px] flex items-center justify-center gap-[6px] rounded-sm">
            <span>글쓰기</span>
            <GoChevronDown style={{ fontSize: 20 }} />
          </button>
        </div>
      </div>
    </div>
  );
}
