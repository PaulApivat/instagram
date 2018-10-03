import React from 'react';

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

export default CommentSection;