import fs from 'fs';
import { NextResponse } from 'next/server';

export const GET = () => {
  try {
    const getImagePath = (index: number) => `public/banners/${index}.avif`;

    const bannerImgs: string[] = [];
    for (let i = 1; i <= 5; i++) {
      const path = fs.readFileSync(getImagePath(i), { encoding: 'base64' });
      bannerImgs.push(path);
    }

    return NextResponse.json({
      images: bannerImgs,
    });
  } catch {
    return NextResponse.json(
      { error: '문제가 발생했습니다. 다시 시도해 주세요.' },
      { status: 500 }
    );
  }
};
