import React from 'react';
import PostContainer from './components/PostContainer/PostContainer'
import ImageContainer from './components/ImageContainer/ImageContainer'
import ThumbNailImageContainer from './components/ThumbNailImageContainer/ThumbNailImageContainer'
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './DummyData.css';


const DummyData = props => {
    return (
        <>
            {props.dummyData.map(alldata => (
                    <div>
                        <Card className="main-container">
                            <CardImg className="thumbnail-image" src={alldata.thumbnailUrl} alt="Thumbnail Image"/>
                            <CardImg className="image" top width="100%" 
                                src={alldata.imageUrl} alt="Main Image" 
                            />
                            <PostContainer 
                                commentsarray={alldata.comments} 
                                likes={alldata.likes} 
                                timestamp={alldata.timestamp}

                            />
                            <input placeholder="Add a comment..." />
                        </Card>
                    </div>
            ))}
        </>
    )
}

// DummyData.propTypes = {
//     dummyData: PropTypes.array.isRequired
// };

DummyData.defaultProps = {
    dummyData: []
}

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