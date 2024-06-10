import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <h1>Ryan Walsh</h1>
        </div>
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/"> Projects </Link>
            <Link to="/"> About Me </Link>
        </div>
    </div>
  );
}

export default Navbar
