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

  componentDidMount(){
    //pulling 'loggedIn' data from HOC Authenticate via PassedComponent props
    console.log(this.props)
  }


// move the conditional rendering logic below into Authenticate
  render(){
    return(
      <div className="App">
            
            {/* {this.props.loggedIn ? <PostsPage /> : <Login />} */}
            <h4>From Authenticate: {this.props.count}</h4>
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
