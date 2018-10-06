import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import DummyData from './DummyData';
import SearchBar from './components/SearchBar/SearchBar'


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.setState({data: dummyData});
    // This console.log shows an empty array
    console.log(this.state.data)
  }

  filterPost = (str) => {
    const posts = dummyData;
    const filteredpost = posts.filter((post) => {
      return post.username.includes(str)
    })
    this.setState({data: filteredpost});
  }



  render(){
    // This console.log shows the FULL dummyData array
    console.log(this.state.data)
    return(
      <div className="App">
            <SearchBar filterPost={this.filterPost}/>
            <DummyData dummyData={this.state.data} />
      </div>
    )
  }

}

export default App;
