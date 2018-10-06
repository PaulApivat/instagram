import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


class CommentSection extends React.Component {
    constructor(props){
        super(props);
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