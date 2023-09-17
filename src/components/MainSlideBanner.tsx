import Image from 'next/image';
import React from 'react';
import MainSlideBannerContainer from './MainSlideBannerContainer';

export default async function MainSlideBanner() {
  const { images } = await fetch('http://localhost:3000/api/banners').then(
    (res) => res.json()
  );

  return (
    <div className="overflow-hidden bg-gray-100 flex items-center justify-center">
      <MainSlideBannerContainer banners={images} />
    </div>
  );
}
