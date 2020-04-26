import React from 'react';
import imgBanner from '../../assets/img/logoit-crowd.png';
import wave from '../../assets/img/wave.svg';

const Banner = () => {
  return (
    <div>
      <img className='illustration' src={imgBanner} alt='it crowd'></img>
      <div className='banner'>
        <div className='banner-text'>
          <h1>It Crowd</h1>
          <p>Movie Company</p>
          <p>This is a react test, with API Rails integrated for IT Crowd Company</p>
        </div>
        <img className='wave' src={wave} alt='it crowd'></img>
      </div>
    </div>
  );
}

export default Banner;
