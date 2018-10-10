import React from 'react';

//This is the higher order component
const Authenticate = PassedComponent => {
    return class HocAuth extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                loggedIn: true
            }
        }

        // componentDidMount(){
        //     // const userLogin = localStorage.getItem(this.state.loggedIn)
        //     if (loggedIn) {
        //         return (
        //             post
        //         ) 
        //     } else {
        //         return ( 
        //             login
        //         )
        //     }
        // }


        render(){
            return <PassedComponent {...this.state} />;
        }
    }
}

export default Authenticate
    