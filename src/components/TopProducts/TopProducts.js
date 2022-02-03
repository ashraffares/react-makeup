import React from 'react';
import ButtonLink from '../ButttonLink/ButtonLink';
import SectionTitle from '../SectionTitle/SectionTitle';

const TopProducts = () => (
  <>
    <div className="flex flex-row justify-between">
      <SectionTitle text="Top Products" />
      <ButtonLink path="/" text="See More" color="bg-yellow" />
    </div>
    {/* Products */}
    <div className="h-80" />
  </>
);

export default TopProducts;
