import React, { Component } from 'react';
import './App.css';
// import dummyData from './dummy-data';
// import DummyData from './DummyData';
// import SearchBar from './components/SearchBar/SearchBar'
import PostsPage from './components/PostContainer/PostsPage'
// import PostsPage from './ThePostsPage'
import Authenticate from './components/Authentication/Authenticate'
import Login from './components/Login/Login'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    //pulling 'loggedIn' data from HOC Authenticate via PassedComponent props
    console.log(this.props)
  }

  render(){
    return(
      <div className="App">
            {this.props.loggedIn ? <PostsPage /> : <Login />}
            <h4>From Authenticate: {this.props.count}</h4>
      </div>
    )
  }

}


const AuthenticatedPage = Authenticate(App);

export default AuthenticatedPage;
