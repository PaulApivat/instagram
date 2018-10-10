import React, { Component } from 'react';
import './App.css';
// import dummyData from './dummy-data';
// import DummyData from './DummyData';
// import SearchBar from './components/SearchBar/SearchBar'
// import PostsPage from './components/PostContainer/PostsPage'
import ThePostsPage from './ThePostsPage'
import Authenticate from './components/Authentication/Authenticate'
import Login from './components/Login/Login'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // componentDidMount(){
  //   this.setState({data: dummyData});
  //   // This console.log shows an empty array
  //   console.log(this.state.data)
  // }

  // filterPost = (str) => {
  //   const posts = dummyData;
  //   const filteredpost = posts.filter((post) => {
  //     return post.username.includes(str)
  //   })
  //   this.setState({data: filteredpost});
  // }


  render(){
    // This console.log shows the FULL dummyData array
    console.log(this.state.data)
    return(
      <div className="App">
            {/* <SearchBar filterPost={this.filterPost}/>
            <DummyData dummyData={this.state.data} /> */}
            <Authenticate />
            <ThePostsPage />
            <h4>From Authenticate: {this.props.count}</h4>
            <Login />
            
      </div>
    )
  }

}

// const HOCApp = Authenticate(App)

export default App;
