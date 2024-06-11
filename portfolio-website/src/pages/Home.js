import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import BannerImage from '../assets/background.jpg';

function Home() {
  return (
    <div 
      className='home'
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className='headerContainer'>
        <h1>Hello!</h1>
        <p>Welcome to my website. I am Ryan Walsh, an aspiring software developer and Computer Science graduate </p>
        <Link to="/projects">
          <button>View My Work</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
