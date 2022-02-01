import React from 'react';
import NavLinks from '../Nav_link/NavLinks';
import BrandLink from '../Brand_Link';

const Navbar = () => (
  <nav className="container mx-auto font-krona flex flex-row justify-between py-3">
    {/* Brand */}
    <BrandLink />

    <div className="flex items-end">
      <NavLinks />
      <div className="flex px-2" />
    </div>

  </nav>
);

export default Navbar;
