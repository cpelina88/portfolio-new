import React, { Component } from 'react';
import Email from './img/envelope.png';
import GitIcon from './img/github.png';
import './Navbar.css';


class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <div className="info">
          <h4>Cameron Pelina</h4>
          <a href='mailto:cpelina88@gmail.com'>
            <img src={Email} alt="Email icon"/>
          </a>
          <a href='https://github.com/cpelina88'>
            <img className="icon" src={GitIcon} alt="GitHub Icon"/>
          </a>
          <p>phone</p>
        </div>
      </div>
    );
  }
}

export default Navbar;