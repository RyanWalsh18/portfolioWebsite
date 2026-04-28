// Responsive navigation bar — collapses to a hamburger menu on mobile (≤600px)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  // Controls whether the mobile dropdown is visible
  const [openLinks, setOpenLinks] = useState(false);

  // Toggles the mobile menu open/closed when the hamburger button is clicked
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  // Closes the mobile menu automatically when the viewport is widened past 600px,
  // preventing the dropdown from lingering after the user resizes their browser
  const handleResize = () => {
    if (window.innerWidth > 600) {
      setOpenLinks(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Run once on mount so the initial state is correct for the current viewport
    handleResize();

    // Remove the listener when the component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>
      {/* Left side contains the name/logo and the hidden mobile dropdown links.
          The "open"/"close" id is toggled by CSS to show/hide hiddenLinks. */}
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <Link to="/">
          <h1>Ryan Walsh</h1>
        </Link>
        {/* Dropdown links — only visible on mobile when openLinks is true */}
        <div className='hiddenLinks'>
          <Link to="/"> Home </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/aboutMe"> About </Link>
        </div>
      </div>
      {/* Right side contains the desktop nav links and the hamburger button */}
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/aboutMe"> About </Link>
        {/* Hamburger button — only visible on mobile via CSS */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
