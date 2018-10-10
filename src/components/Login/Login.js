import React from 'react'

// I want users to login first, so no need to receive props from another component, initially.
class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
            count: 10
        }
    }

    componentDidMount(){
        //pulling 'loggedIn' data from HOC Authenticate via PassedComponent props
        console.log(this.state)
    }

    addsOne = () => {
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

    userLogin = () => {
        const {loggedIn, username, text} = this.state;
        this.setState({loggedIn: this.state.loggedIn});
        // this.setState({loggedIn: [...commentsarray, {username, text }]});
        // this.setState({commentsarray: [...this.state.commentsarray, {username: this.state.username, text: this.state.text }]});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.userLogin({loggedIn: this.state.loggedIn});
        this.setState({loggedIn: this.state.loggedIn});
        // this.userLogin({password: this.event.target, username: this.event.target});
        // this.setState({password: this.state.password, username: this.state.username});
        console.log(this.state)
    }



    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.target} onChange={this.handleChange} placeholder="username" />
                <input type="text" value={this.state.target} onChange={this.handleChange2} placeholder="password" />
                <button onClick={this.addsOne}>Login {this.state.count} </button> 
            </form>
        )
    }
}

export default Login