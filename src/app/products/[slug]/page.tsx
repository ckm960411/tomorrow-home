import React from 'react';

export default function ProductPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <div className="max-w-[1256px] mx-auto px-[60px]">ProductPage</div>;
}
