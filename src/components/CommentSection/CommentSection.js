import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'static username',
            text: ''
        };
    }

    handleChange = (event) => {
        this.setState({text: event.target.value });
    }

    addNewComment = (event,index) => {
        this.setState({text: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewComment({username: this.state.username, text: this.state.text});
        this.setState({text: this.state.text, username: this.state.username});
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