import React from 'react';
import ButtonLink from '../ButttonLink/ButtonLink';
import BannerImg2 from './bannerimg2.png';

const SecondaryBanner = () => (
  <div className="flex flex-row bg-pink items-center">
    <div className="w-1/2">
      <div className="w-1/2 mx-auto">
        <h4 className="font-krona py-5 font-bold">Be natural, be beautiful, be you.</h4>
        <ButtonLink text="See More" path="/" color="bg-dark text-white" />
      </div>
    </div>
    <div className="w-1/2">
      <img src={BannerImg2} alt="lapstic product" />
    </div>
  </div>
);

export default SecondaryBanner;
