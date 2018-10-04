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
            {props.dummyData.map(e => (
                    <div>
                        <Card className="main-container">
                            <CardImg className="thumbnail-image" src={<ThumbNailImageContainer thumbnail={e.thumbnailUrl}/>} alt="Thumbnail Image"/>
                            <CardImg className="image" top width="100%" 
                                src={<ImageContainer image={e.imageUrl} />} alt="Main Image" 
                                //"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" 
                            />
                            <PostContainer 
                                commentsarray={e.comments} 
                                likes={e.likes} 
                                timestamp={e.timestamp}

                            />
                            <input placeholder="Add a comment..."></input>
                        </Card>
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