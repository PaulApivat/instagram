import React from 'react';
import PostContainer from './components/PostContainer/PostContainer'

const DummyData = props => {
    return (
        <>
            {props.dummyData.map(e => (
                <>
                    <div>
                        <>
                            {e.username}  {/* will erase */}
                        </>
                        <>
                            <PostContainer comments={e.comments}/>
                        </>
                    </div>
                </>
            ))}
        </>
    )
}

export default DummyData;