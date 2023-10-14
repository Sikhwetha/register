import React from 'react';
import imag from '../images/background.jpg';
import './styles.css';

const Home = () => {
  return (
    <div className='home'>
    
      <img src={imag} alt='background ' height={1000} width={1200} />
    </div>
  );
};

export default Home;

