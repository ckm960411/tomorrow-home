import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json({
    popular_keywords: {
      version: '20230903000000',
      results: [
        {
          key: '모도리',
          rank: 1,
          is_new: false,
          diff_rank: 9,
          display_keyword: '모도리',
        },
        {
          key: '플랜테리어',
          rank: 2,
          is_new: false,
          diff_rank: 9,
          display_keyword: '플랜테리어',
        },
        {
          key: '락앤락밀폐용기',
          rank: 3,
          is_new: true,
          diff_rank: 0,
          display_keyword: '락앤락밀폐용기',
        },
        {
          key: '원형테이블800',
          rank: 4,
          is_new: false,
          diff_rank: 0,
          display_keyword: '원형 테이블 800',
        },
        {
          key: '흔들의자',
          rank: 5,
          is_new: false,
          diff_rank: 3,
          display_keyword: '흔들의자',
        },
        {
          key: '북엔드',
          rank: 6,
          is_new: false,
          diff_rank: 6,
          display_keyword: '북엔드',
        },
        {
          key: '카트',
          rank: 7,
          is_new: true,
          diff_rank: 0,
          display_keyword: '카트',
        },
        {
          key: '삼각등쿠션',
          rank: 8,
          is_new: true,
          diff_rank: 0,
          display_keyword: '삼각등쿠션',
        },
        {
          key: '락앤락',
          rank: 9,
          is_new: false,
          diff_rank: 6,
          display_keyword: '락앤락',
        },
        {
          key: '책상1400',
          rank: 10,
          is_new: false,
          diff_rank: 4,
          display_keyword: '책상 1400',
        },
      ],
    },
    recommend_keywords: [],
  });
};
