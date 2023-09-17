import Link from 'next/link';
import React, { useEffect } from 'react';
import PopularKeywords from './PopularKeywords';
import { getCategories } from '@/service/get-categories';
import NavbarSubCategories from './NavbarSubCategories';
import NavbarMainCategories from './NavbarMainCategories';

export default async function NavbarCategories() {
  const { categories } = await getCategories();

  return (
    <div className="relative">
      <NavbarMainCategories categories={categories} />
    </div>
  );
}
