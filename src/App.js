import React from 'react';
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
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
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
  this.setState({input: event.target.value})
    
  }

  onBtnSubmit = () => {
    this.setState({imageUrl: this.state.input});
    
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        // do something with response
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        
      },
      function (err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={particalsoption}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkFrom onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit} />
        <FaceRecog imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}
export default App;
