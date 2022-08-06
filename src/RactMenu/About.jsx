import React from 'react'
import Common from './Common'
import Web from '../images/wmns_laptop.jfif';

const About = () => {
  return (
    <>
     <Common
       name='Welcome to About page'
       imgsrc={Web}
       visit='/contact'
       btname='Contact Now'
      />
    </>
  )   
}

export default About   