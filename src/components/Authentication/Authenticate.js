import React from 'react';

//This is the higher order component
const Authenticate = PassedComponent => {
    return class HocAuth extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                count: 5
            }
        }
        render(){
            return <PassedComponent {...this.state} />;
        }
    }
}

export default Authenticate
    