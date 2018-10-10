import React from 'react'

class Login extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <input placeholder="username" />
                <input placeholder="password" />
                <button>Login</button>
            </div>
        )
    }
}

export default Login