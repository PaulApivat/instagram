import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

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

export default PostContainer;