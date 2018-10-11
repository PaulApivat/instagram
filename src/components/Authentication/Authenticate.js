import React from 'react';
import Login from '../Login/Login'

//This is the higher order component
const Authenticate = App => {
    return class HocAuth extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                username: '',
                password: '',
                loggedIn: false,
                count: 15
            }
        }

        // on componentDidMount, check localStorage to see if a user is logged in
        // if user is loggedin, we will run the <PassedComponent />, else return <Login />
        componentDidMount() {
            console.log(this.state)
            if (!localStorage.getItem('user')) {
                this.setState({ loggedIn: false});
            } else {
                this.setState({ loggedIn: true });
            }
        }

        
        // userLogin = () => {
        //     this.setState(prevState => {
        //         return { count: prevState.count + 1 };
        //     })
        //     this.setState({loggedIn: true})
        // }

        // handleChange = (event) => {
        //     // this.setState({username: event.target.value, password: this.state.password });
        //     this.setState({username: event.target.value});
        // }

        // handleChange2 = (event) => {
        //     // this.setState({username: event.target.value, password: this.state.password });
        //     this.setState({password: event.target.value});
        // }

        // handleSubmit = (event) => {
        //     event.preventDefault();
        //     console.log(this.state)
        
        // }


        render(){
            // the {...this.state} ensures that the state, with loggedIn, is passed via props to App.js
            // without {...this.state} what gets rendered is a login, becaues there is no loggedIn
            // return <PassedComponent {...this.state} />
                if (this.state.loggedIn) return <App {...this.state}/>;
                return <Login />;

                // <form onSubmit={this.handleSubmit}>
                //     <PassedComponent {...this.state} />
                //     <input type="text" value={this.state.target} onChange={this.handleChange} placeholder="username" />
                //     <input type="text" value={this.state.target} onChange={this.handleChange2} placeholder="password" />
                //     <button onClick={this.userLogin}>Login {this.state.count} </button> 
                // </form>
        }
    }
}

export default Authenticate
    