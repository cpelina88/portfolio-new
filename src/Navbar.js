import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <div className="info">
          <h4>Cameron Pelina</h4>
          <p>cpelina88@gmail.com</p>
          <p>phone</p>
          <p>github.com/cpelina88</p>
        </div>
      </div>
    );
  }
}

export default Navbar;