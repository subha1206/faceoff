import React from 'react';
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import SignIn from './components/Signin/SignIn'
import Register from './components/Register/Register'
import ImageLinkFrom from './components/ImageLinkFrom/ImageLinkFrom'
import Rank from './components/Rank/Rank'
import FaceRecog from './components/FaceRecog/FaceRecog'

import './App.css';


const app = new Clarifai.App({
  apiKey: '379ce55f48744b63824ed4cace67045d'
});

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
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  faceLocation = (data) => {
    const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimg');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiface.left_col * width,
      topRow: clarifaiface.top_row * height,
      rightCol: width - (clarifaiface.right_col * width),
      bottomRow: height -(clarifaiface.bottom_row * height)
    }
  }

  faceBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
  this.setState({input: event.target.value})
    
  }

  onBtnSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.faceBox(this.faceLocation(response)))
      .catch(err => console.log(err))
  }
  
  onRouteChange = (route) => {
    this.setState({route: route })
  }

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={particalsoption}
        />
        {this.state.route === 'home'
         ? <div>
          <Navigation onRouteChange ={this.onRouteChange} />
          <Logo />
          <Rank />
          <ImageLinkFrom onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit} />
            <FaceRecog box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
          : (
            this.state.route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange}/>
        )
        }
      </div>
    );
  }
}
export default App;
