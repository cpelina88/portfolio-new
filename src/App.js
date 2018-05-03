import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import wooord from './img/wooord.png';
import change from './img/change.png';
import weather from './img/weather.png';
import Vi from './img/vi.png';
import Harpy from './img/harpy.png';
import Riven from './img/riven.png';
import Tiefling from './img/tiefling.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='nav'>
          <Navbar/>
        </div>
        <div className='content'>
          <h4>BIO</h4>
          <p>Hello!  My name is Cameron.  I'm an aspiring web developer who is always looking to improve and grow as a programmer.  Here you'll find some of my work done as a coder/artist.  Thanks for visiting!</p>
          <br/>
          <h4>PROJECTS</h4>
          <div className="projects">
            <div className="project">
              <a href="http://hackathon1-env.peaw4jqmsw.us-west-2.elasticbeanstalk.com/">
                <img className="thumbnail" src={wooord} alt="Wooord App"/>
                <p className='desc'>A word association guessing game application built using Bootstrap and Recat.</p>
              </a>
            </div>
            <div className="project">
              <a href="https://cp-change-calculator.herokuapp.com/">
                <img className="thumbnail" src={change} alt="Change Calculator App"/>
                <p className='desc'>An application built using React that calculates exact change for USD transactions, including the most efficient denominations.</p>
              </a>
            </div>
            <div className="project">
              <a href="https://cp-weather-app.herokuapp.com/">
                <img className="thumbnail" src={weather} alt="Weather App"/>
                <p className='desc'>An application built using React and public APIs that retrieves real time weather statistics in any given city name throughout the world.  This application also keeps a log of your search history.</p>
              </a>
            </div>
          </div>
          <br/>
          <h4>ARTWORK</h4>
          <div className='artworks'>
          <a target="_blank" href={Tiefling}>
            <img className="artThumbnail" src={Tiefling} alt="Tiefling Artwork"/>
          </a>
          <a target="_blank" href={Harpy}>
            <img className="artThumbnail" src={Harpy} alt="Harpy Artwork"/>
          </a>
          <a target="_blank" href={Riven}>
            <img className="artThumbnail" src={Riven} alt="Riven Artwork"/>
          </a>
          <a target="_blank" href={Vi}>
            <img className="artThumbnail" src={Vi} alt="Vi Artwork"/>
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
