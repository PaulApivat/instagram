import React from 'react';
import PostContainer from './components/PostContainer/PostContainer'
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './DummyData.css';
import styled from 'styled-components';
import UsernameStyle from './Styles/Resusables/UsernameStyle';

const ThumbnailImage = styled.img`
    height: 60px;
    width: 40%;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 10px;
`


class DummyData extends React.Component {
    constructor(){
        super();
        // this.state = {
        //     postarray: [],
        // };
    }

    
    

    render(){
        // this DummyData component is simply taking in props from App.js and rendering, it's not changing any state
        // console.log(this.props.dummyData)
        return(
            <div>
            <>
                {this.props.dummyData.map(alldata => (
                        <div key={alldata.timestamp}>
                            <Card className="main-container">
                                    <div className="header-container">
                                        <div className="thumbnail-image-container">
                                            <ThumbnailImage src={alldata.thumbnailUrl} alt="Thumbnail Image" />
                                        </div>
                                        <UsernameStyle>
                                            {alldata.username}
                                        </UsernameStyle>
                                    </div>
                                <CardImg className="image" top width="100%" 
                                    src={alldata.imageUrl} alt="Main Image" 
                                />
                                <PostContainer 
                                    commentsarray={alldata.comments} 
                                    likes={alldata.likes} 
                                    timestamp={alldata.timestamp}

                                />
                            

                            </Card>
                        </div>
                ))}
            </>
        </div>
        )
    }
}



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