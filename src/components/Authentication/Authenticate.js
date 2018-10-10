import React from 'react';

//This is the higher order component
const Authenticate = PassedComponent => {
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

        
        userLogin = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 };
            })
            this.setState({loggedIn: true})
        }

        handleChange = (event) => {
            // this.setState({username: event.target.value, password: this.state.password });
            this.setState({username: event.target.value});
        }

        handleChange2 = (event) => {
            // this.setState({username: event.target.value, password: this.state.password });
            this.setState({password: event.target.value});
        }

        handleSubmit = (event) => {
            event.preventDefault();
            console.log(this.state)
        
        }


        render(){
            // the {...this.state} ensures that the state, with loggedIn, is passed via props to App.js
            // without {...this.state} what gets rendered is a login, becaues there is no loggedIn
            // return <PassedComponent {...this.state} />;
            return(
                <form onSubmit={this.handleSubmit}>
                    <PassedComponent {...this.state} />
                    <input type="text" value={this.state.target} onChange={this.handleChange} placeholder="username" />
                    <input type="text" value={this.state.target} onChange={this.handleChange2} placeholder="password" />
                    <button onClick={this.userLogin}>Login {this.state.count} </button> 
                </form>
            )
        }
    }
}

export default Authenticate
    