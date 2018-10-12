import React from 'react'
import { Button } from 'reactstrap';

// I want users to login first, so no need to receive props from another component, initially.
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
            count: 10
        }
    }

    //WHY is my code slightly different from the model solution?

    handleChange = event => {
        // this.setState({ [event.target.name]: event.target.value });
        this.setState({ [event.target.name]: event.target.value });
    };

    // 6.) when click 'login' button, set 'username' input to localStorage 'user'
    handleSubmit = event => {
        const user = this.state.username;
        const password = this.state.password;
        //part of browser API - not React;
        localStorage.setItem('user', user);
        localStorage.setItem('password', password);
        // reloads entire page - goes back to App -> Authenticate -> Login -> (now there IS a user) -> return <App /> instead
        window.location.reload();
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} name='username' onChange={this.handleChange} placeholder="username" />
                <input type="text" value={this.state.password} name='password' onChange={this.handleChange} placeholder="password" />
                <Button onClick={this.handleSubmit}>Login {this.state.count} </Button> 
            </form>
            /* <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.target} onChange={this.handleChange} placeholder="username" />
                <input type="text" value={this.state.target} onChange={this.handleChange2} placeholder="password" />
                <button onClick={this.userLogin}>Login {this.state.count} </button> 
            </form> */
        )
    }
}

export default Login