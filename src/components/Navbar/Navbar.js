import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="container mx-auto font-krona flex flex-row justify-between py-3">
    {/* Brand */}
    <a className="text-2xl" href="/">BeautyPink</a>

    <div className="flex items-end lowercase">
      {/* Home */}
      <a className="text-sm mr-8" href="/home">Home</a>
      {/* Search */}
      <a className="text-sm mr-8" href="/search">Search</a>
      {/* About */}
      <a className="text-sm mr-8" href="/about">About</a>
      {/* Icons */}
      <div className="flex px-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {/* heart */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        {/* Cart */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
    </div>

  </nav>
);

export default Navbar;
