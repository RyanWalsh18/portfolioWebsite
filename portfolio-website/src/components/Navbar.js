import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const handleResize = () => {
    if (window.innerWidth > 600) {
      setOpenLinks(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <Link to="/">
          <h1>Ryan Walsh</h1>
        </Link>
        <div className='hiddenLinks'>
          <Link to="/"> Home </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/aboutMe"> About </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/aboutMe"> About </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
