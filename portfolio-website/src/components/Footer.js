// Footer — displayed on every page; contains social media links
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        {/* Opens LinkedIn profile in a new tab.*/}
        <a href="https://www.linkedin.com/in/ryan-walsh-706a88256" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
