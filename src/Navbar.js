import React, { Component } from 'react';
import Email from './img/envelope.png';
import GitIcon from './img/github.png';
import LinkedinIcon from './img/linkedin-logo.png';
import HackerIcon from './img/HackerRank_logo.png';
import ResumePic from './img/resumepic.png';
import './Navbar.css';


class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <div className="info">
          <img className="profilePic" src={ResumePic} alt="Profile"/>
          <h4>Cameron Pelina</h4>
          <a href='mailto:cpelina88@gmail.com'>
            <img src={Email} alt="Email icon"/>
          </a>
          <a href='https://github.com/cpelina88'>
            <img className="icon" src={GitIcon} alt="GitHub Icon"/>
          </a>
          <a href='https://www.linkedin.com/in/cameron-pelina-2a1a15152/'>
            <img className="icon" src={LinkedinIcon} alt="Linkedin Icon"/>
          </a>
          <a href='https://www.hackerrank.com/cpelina88'>
            <img className="icon" src={HackerIcon} alt="HackerRank Icon"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;