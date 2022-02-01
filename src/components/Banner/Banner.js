import React from 'react';
import LeafImg from './leaf.jpg';
import './Banner.css';
import ButtonLink from '../ButttonLink/ButtonLink';

const Banner = () => (
  <div className="flex flex-row my-5 items-center">
    <div className="w-1/2">
      <h1 className="font-krona banner-h1">
        The new linup you will swear by for dullness, dryness and breakouts.
      </h1>
      <p className="text-sm my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus pariatur nostr!
      </p>
      <ButtonLink text="See More" path="/" />
    </div>
    <div className="w-1/2">
      <img className="leafimg mx-auto rounded-r-lg" src={LeafImg} alt="paste on top of green leaf" />
    </div>
  </div>
);

export default Banner;
