import React from 'react';
import ButtonLink from '../ButttonLink/ButtonLink';
import SectionTitle from '../SectionTitle/SectionTitle';

const TopProducts = () => (
  <>
    <div className="flex flex-row justify-between">
      <SectionTitle text="Top Products" />
      <ButtonLink path="/" text="See More" />
    </div>
  </>
);

export default TopProducts;
