import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


// const CommentSection = props => {
//     return (  
//             <CardBody>
//                 <CardText><strong>{props.username}</strong> {props.text} </CardText>
//             </CardBody>
//     )
// }

// class CommentSection extends React.Component {
//     constructor(){
//         super();
//     }

//     render(){
//         return(
//             <CardBody>
//                 <CardText><strong>{this.props.username}</strong> {this.props.text} </CardText>
//             </CardBody>
//         )
//     }
// }

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'static username',
            text: ''
        };
    }

    componentDidMount(){
        this.setState({username: `{this.props.username}`, text: `{this.props.text}`})
        console.log('mounting CommentSection data...')
    }

    addNewComment = (event,index) => {
        this.setState({text: event.target.value});
    }

    render(){
        return(
            <CardBody>
                <CardText><strong>{this.props.username}</strong> {this.props.text} </CardText>
            </CardBody>
        )
    }
}




CommentSection.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CommentSection;