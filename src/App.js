import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import DummyData from './DummyData';
import SearchBar from './components/SearchBar/SearchBar'


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
    this.setState({data: dummyData});
  }

  filterPost = (str) => {
    const posts = dummyData;
    const filteredpost = posts.filter((post) => {
      return post.username.includes(str)
    })
    this.setState({data: filteredpost});
  }



  render(){
    return(
      <div className="App">
            <SearchBar filterPost={this.filterPost}/>
            <DummyData dummyData={this.state.data} />
      </div>
    )
  }

}

export default App;
