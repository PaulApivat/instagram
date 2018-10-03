import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div>
           Username: {props.username}, Second Text: {props.text},
           <>
             Input Box: <input placeholder="placeholder text"></input>
           </>
        </div>
    )
}

CommentSection.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CommentSection;