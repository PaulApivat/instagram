import React from 'react';
import PostContainer from './components/PostContainer/PostContainer'

const DummyData = props => {
    return (
        <>
            {props.dummyData.map(e => (
                <>
                    <div>
                        <>
                           <h1> {e.username} </h1> {/* will pass down */}
                        </>
                        <>
                            <PostContainer commentsarray={e.comments}/>
                        </>
                    </div>
                </>
            ))}
        </>
    )
}

export default DummyData;