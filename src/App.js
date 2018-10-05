import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import DummyData from './DummyData';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <DummyData dummyData={dummyData} />
//       </div>
//     );
//   }
// }

// In app.js use componentDidMount() to set your data to the component's state. 
// Use the state object to pass data to your PostContainer component.

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    console.log('mounting data...')
    setTimeout(() => {
      this.setState({data: dummyData});
    }, 500);
  }

  render(){
    return(
      <div className="App">
        <DummyData dummyData={this.state.data} />
      </div>
    )
  }

}

export default App;
