import React from 'react';
import Particles from 'react-particles-js'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkFrom from './components/ImageLinkFrom/ImageLinkFrom'
import Rank from './components/Rank/Rank'
import './App.css';

const particalsoption = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
function App() {
  return (
    <div className="App">
      <Particles
        className ="particles"  
        params={particalsoption}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkFrom />
      {/*
      <FaceRecognition />  */}
    </div>
  );
}

export default App;
