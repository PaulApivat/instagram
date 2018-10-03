import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import DummyData from './DummyData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DummyData dummyData={dummyData} />
      </div>
    );
  }
}

export default App;
