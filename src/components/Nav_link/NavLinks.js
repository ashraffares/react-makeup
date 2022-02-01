import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/search',
      name: 'search',
    },
    {
      path: '/about',
      name: 'About',
    },
  ];

  return (
    <>
      {
        links.map(({ name, path }) => <NavLink className="text-sm mr-8 lowercase" key="path" to={path}>{name}</NavLink>)
      }
    </>
  );
};

export default NavLinks;
