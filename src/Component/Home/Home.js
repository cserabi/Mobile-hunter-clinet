import React from 'react';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Exlpore';


import './Home.css';


const Home = () => {
  const slice = 6;
  return (

    <div>
      <Banner></Banner>
      <Explore slice={slice}></Explore>

    </div>
  );
};

export default Home;