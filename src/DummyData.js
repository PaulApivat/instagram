import React from 'react';
import PostContainer from './components/PostContainer/PostContainer'
import PropTypes from 'prop-types';

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

DummyData.propTypes = {
    dummyData: PropTypes.array.isRequired
};

DummyData.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.array
        })
    ).isRequired
};

export default DummyData;