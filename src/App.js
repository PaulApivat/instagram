import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import DummyData from './DummyData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div> {/* picture will be removed */}
          <img src="https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg" />
        </div>
        <DummyData dummyData={dummyData} />
      </div>
    );
  }
}

export default App;
