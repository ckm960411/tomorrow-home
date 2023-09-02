import { PopularKeyword } from '@/service/popular-keywords';
import { GoChevronUp } from 'react-icons/go';
import PopularKeywordItem from './PopularKeywordItem';

interface PopularKeywordsPopupProps {
  keywords: PopularKeyword[];
  onClose: () => void;
}
export default function PopularKeywordsPopup({
  keywords,
  onClose,
}: PopularKeywordsPopupProps) {
  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-0 right-0 z-10 bg-white w-[270px] rounded-sm shadow-lg pt-6 px-4 pb-4"
    >
      <div className="flex items-center justify-between">
        <span className="text-gray-800 font-bold text-[18px]">인기 검색어</span>
        <GoChevronUp
          className="text-gray-800 text-[24px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex flex-col justify-center gap-2 mt-3">
        {keywords.map((keyword, index) => (
          <PopularKeywordItem
            key={keyword.key}
            order={index + 1}
            keyword={keyword}
          />
        ))}
      </div>
    </div>
  );
}
