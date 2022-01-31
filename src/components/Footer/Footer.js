import React from 'react';
import './Footer.css';

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
      <a className="text-2xl text-yellow font-krona" href="/">BeautyPink</a>
      <div className="flex items-center">
        {
          links.map((link) => <a href="/" className="ml-4" key={link}>{link}</a>)
        }
      </div>
    </footer>
  );
};

export default Footer;
