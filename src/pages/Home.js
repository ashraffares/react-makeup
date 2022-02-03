import React from 'react';
import Banner from '../components/Banner';
import SecondaryBanner from '../components/SecondaryBanner';
import TopProducts from '../components/TopProducts';

const Home = () => (
  <main className="container mx-auto">
    <Banner />
    <TopProducts />
    <SecondaryBanner />
  </main>
);

export default Home;
