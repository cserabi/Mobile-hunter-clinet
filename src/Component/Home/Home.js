import React from 'react';
import Banner from '../Banner/Banner';
import Purchase from '../Explore/Purchase';

import './Home.css';


const Home = () => {
  const slice = 6;
  return (

    <div>
      <Banner></Banner>
      <Purchase slice={slice}></Purchase>

    </div>
  );
};

export default Home;