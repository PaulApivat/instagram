import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'
// import Login from './components/Login/Login'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], 
    };
  }

  // 3.)
  componentDidMount(){
    //pulling all State object from HOC Authenticate via App props (i.e., username, password, loggedIn, count)
    console.log(this.props)
  }

  // 2.)
  render(){
    // checking 'user' (username) entered into localStorage
    console.log(localStorage.getItem('user'))
    console.log(localStorage.getItem('password'))
    return(
      <div className="App">
            <PostsPage />
      </div>
    )
  }
}


// const AuthenticatedPage = Authenticate(App);
// export default AuthenticatedPage;


// exporting a higher order component that we built; passing an App class into Authenticate HOC
// wrapping functionality of App INSIDE higher order component Authenticate
// Authenticate is "eating" the App
export default Authenticate(App);
