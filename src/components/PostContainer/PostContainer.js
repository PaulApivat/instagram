import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <>
            {props.commentsarray.map(e => (
                <>
                    <div>
                        <>
                            <strong>Text: </strong>{e.text} {/* will pass down */}
                        </>
                        <>
                           <CommentSection username={e.username} text={e.text}/>
                        </>
                    </div>
                </>
            ))}
        </>
    )
}

PostContainer.propTypes = {
    commentsarray: PropTypes.array.isRequired
};

PostContainer.propTypes = {
    commentsarray: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    ).isRequired
};

export default PostContainer;