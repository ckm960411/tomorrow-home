import React from 'react';
import { VscTriangleUp } from 'react-icons/vsc';
import { BsDash } from 'react-icons/bs';
import { GoChevronDown } from 'react-icons/go';
import { PopularKeyword } from '@/service/popular-keywords';

interface PopularKeywordItemProps {
  order: number;
  keyword: PopularKeyword;
}
export default function PopularKeywordItem({
  order,
  keyword,
}: PopularKeywordItemProps) {
  return (
    <div className="w-full h-[30px] flex items-center">
      <span className="w-5 h-5 font-bold flex items-center justify-center">
        {order}
      </span>
      <span className="w-7 h-6 flex items-center justify-center">
        {keyword.is_new ? (
          <span className="text-red-400 text-[4px] font-bold">NEW</span>
        ) : keyword.diff_rank === 0 ? (
          <BsDash />
        ) : keyword.diff_rank > 0 ? (
          <VscTriangleUp className="text-red-400" />
        ) : (
          <VscTriangleUp className="text-red-400 rotate-180" />
        )}
      </span>
      <span className="text-gray-800 flex-grow">{keyword.display_keyword}</span>
    </div>
  );
}
