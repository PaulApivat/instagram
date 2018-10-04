import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
// import './PostContainer.css';

const PostContainer = props => {
    return (
        <div>
            <>
                Likes: {props.likes}
            </>
            <>
                {props.commentsarray.map(comments => (
                    <div>
                        <CommentSection username={comments.username} text={comments.text}/> 
                    </div>
                ))}
            </>
            <>
                Time: {props.timestamp}
            </>
        </div>
    )
}



PostContainer.defaultProps = {
    likes: 0,
    username: '',
    text: '',
    timestamp: Date.now()
}

PostContainer.propTypes = {
    commentsarray: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    ).isRequired
};

export default PostContainer;
