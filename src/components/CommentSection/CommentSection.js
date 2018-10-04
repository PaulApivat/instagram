import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


// const CommentSection = props => {
//     return (
//         <div>
//             <strong>{props.username}</strong> {props.text},
//         </div>
//     )
// }

const CommentSection = props => {
    return (  
            <CardBody>
                <CardText><strong>{props.username}</strong> {props.text} </CardText>
            </CardBody>
    )
}

CommentSection.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CommentSection;