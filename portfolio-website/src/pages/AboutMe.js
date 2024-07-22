import React from 'react';
import '../styles/AboutMe.css';
import ResultsData from '../assets/results.json';


function AboutMe() {
    return (
      <div className='aboutMe'>
        <h1 className='pageTitle'>About Me</h1>
        <p>This is about me</p>

        <div className='results'>
            <div className='firstYear'>
                <h2>First Year</h2>
                <div className='resultsTable'></div>
            </div>
            <div className='secondYear'>
                <h2>SecondYear</h2>
                <div className='resultsTable'></div>
            </div>
            <div className='thirdYear'>
                <h2>Third Year</h2>
                <div className='resultsTable'></div>
            </div>
        </div>
      </div>
    );
  }
  
  export default AboutMe;