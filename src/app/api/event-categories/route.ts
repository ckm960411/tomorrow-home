import { NextResponse } from 'next/server';
import fs from 'fs';

export const GET = () => {
  try {
    const getIamgePath = (index: number) =>
      `public/event-categories/${index}.avif`;

    const eventCategoryImgs: string[] = [];

    for (let i = 1; i <= 10; i++) {
      const path = fs.readFileSync(getIamgePath(i), { encoding: 'base64' });
      eventCategoryImgs.push(`data:image/avif;base64,${path}`);
    }

    const titles = [
      '하루특가',
      'BEST',
      '오늘의딜',
      '초특가모음',
      '특별세일',
      '프리미엄',
      '패브릭특가',
      'P&G특가',
      '오!쇼룸',
      '기획전',
    ];

    const data = eventCategoryImgs.map((img, i) => ({
      title: titles[i],
      image_url: img,
    }));

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: '문제가 발생했습니다. 다시 시도해 주세요.' },
      { status: 500 }
    );
  }
};
