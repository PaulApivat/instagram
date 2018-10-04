import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';
import './like.png';


const PostContainer = props => {
    return (
        <div>
            <div>
                <img src={props.like} alt="like image"/>
            </div>
            <div className="likes">
                Likes: {props.likes}
            </div>
            <div>
                {props.commentsarray.map(comments => (
                    <div>
                        <CommentSection username={comments.username} text={comments.text}/> 
                    </div>
                ))}
            </div>
            <div className="timestamp">
                Time: {props.timestamp}
            </div>
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
