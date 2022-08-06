import React from 'react';
import Common from './Common';
import Web from '../images/wmn_laptop.jfif';

const Home = () => {
  return (
    <>
      <Common
        name='Grow your buisness with'
        imgsrc={Web}
        visit='/services'
        btname='Get Started'
      />
    </>
  )
}

export default Home  