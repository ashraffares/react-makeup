import React from 'react';
import BrandLink from '../Brand_Link';

const Footer = () => {
  const links = [
    'about',
    'skincare',
    'makeup',
    'supplements',
    'contact',
  ];
  return (
    <footer className="bg-dark text-light flex justify-between p-4">
      <BrandLink classes="text-yellow" />
      <div className="flex items-center">
        {
          links.map((link) => <a href="/" className="ml-4" key={link}>{link}</a>)
        }
      </div>
    </footer>
  );
};

export default Footer;
