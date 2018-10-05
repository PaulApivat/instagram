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

class CommentSection extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <CardBody>
                <CardText><strong>{this.props.username}</strong> {this.props.text} </CardText>
            </CardBody>
        )
    }
}


// class CommentSection extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             username: 'hard coded'
//         };
//     }

//     componentDidMount(){
//         console.log('mounting CommentSection data...')
//         this.props.setState({username: this.props.username});
//     }
// }

// class CommentSection extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             comments: [
//                 props.username: 'HardCoded Name',
//                 props.text: '',
//             ]
//         };
//     }

//     componentDidMount(){
//         console.log('mounting CommentSection data...')
//         let newComments = {...this.state.comments}
//         props.comments.username = 'HardCoded Name';
//         props.comments.text = '';
//         this.props.setState({props.comments});
//     }
// }

CommentSection.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CommentSection;