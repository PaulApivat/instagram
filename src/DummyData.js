import React from 'react';
import PostContainer from './components/PostContainer/PostContainer'
import PropTypes from 'prop-types';
//import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const DummyData = props => {
    return (
        <>
            {props.dummyData.map(e => (
            
                    <div>
                        <>
                            <img src="#" />
                        </>
                        <>
                            <PostContainer commentsarray={e.comments}/>
                        </>
                        <>
                            <input placeholder="Add a comment..."></input>
                        </>
                    </div>
                
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