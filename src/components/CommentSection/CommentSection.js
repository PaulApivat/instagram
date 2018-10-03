import React from 'react';

const CommentSection = props => {
    return (
        <div>
           Username: {props.username}, Second Text: {props.text}
        </div>
    )
}

export default CommentSection;