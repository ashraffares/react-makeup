import React from 'react';
import NavLinks from '../Nav_link/NavLinks';
import BrandLink from '../Brand_Link';
import Heart from '../Icons/Heart';
import Search from '../Icons/Search';
import Cart from '../Icons/Cart';

const Navbar = () => (
  <nav className="container mx-auto font-krona flex flex-row justify-between py-3">
    {/* Brand */}
    <BrandLink />

    <div className="flex items-end">
      <NavLinks />
      <div className="flex px-2" />
      <Heart color="currentColor" />

      <Search color="currentColor" />

      <Cart color="currentColor" />
    </div>

  </nav>
);

export default Navbar;
