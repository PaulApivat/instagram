import React from 'react';
import Login from '../Login/Login'

//This is the higher order component - the App that gets "passed" has to be the same name as App.js
// Authenticate is a (higher-order) function, that RETURNS a React.Component class
const Authenticate = App => {
    // can be anonymous class component (no need for a name)
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                username: '',
                password: '',
                loggedIn: false,
                count: 15
            }
        }

        // 5.)
        // on componentDidMount, check localStorage to see if a user is logged in
        // if user is loggedin, we will run the <App />, else return <Login />
        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({ loggedIn: false});
            } else {
                this.setState({ loggedIn: true });
            }
            console.log(this.state.username)
        }

        // 4.)
        render(){
            // on the first pass, it will return <Login /> because loggedIn default is "false" (until a username is entered)
            // {...this.state} ensures that State data is passed down to App class from Authenticate (HOC); 
            // the initial state passed down shows up on componentDidMount
                if (this.state.loggedIn) return <App {...this.state}/>;
                return <Login />;
        }
    }
}

export default Authenticate
    