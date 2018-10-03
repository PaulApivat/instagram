import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div>
           <strong>{props.username}</strong> {props.text},
           
        </div>
           
    )
}

CommentSection.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CommentSection;