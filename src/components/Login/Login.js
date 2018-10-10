import React from 'react'

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.userLogin({username: this.event.target, password: this.event.target});
        this.setState({password: this.state.password, username: this.state.username});
    }



    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="username" />
                <input placeholder="password" />
                <button>Login</button>
            </form>
        )
    }
}

export default Login