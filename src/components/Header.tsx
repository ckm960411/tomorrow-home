import React from 'react';
import Navbar from './Navbar';
import NavbarCategories from './NavbarCategories';

export default function Header() {
  return (
    <nav>
      <Navbar />
      <NavbarCategories />
    </nav>
  );
}
