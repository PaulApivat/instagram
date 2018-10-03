import React from 'react';

const PostContainer = props => {
    return (
        <>
            {props.comments.map(e => (
                <>
                    <div>
                        {e.text}
                    </div>
                </>
            ))}
        </>
    )
}

export default PostContainer;