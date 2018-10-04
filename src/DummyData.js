import React from 'react';
import PostContainer from './components/PostContainer/PostContainer'
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

// const DummyData = props => {
//     return (
//         <>
//             {props.dummyData.map(e => (
            
//                     <div>
//                         <>
//                             <img src="#" />
//                         </>
//                         <>
//                             <PostContainer commentsarray={e.comments}/>
//                         </>
//                         <>
//                             <input placeholder="Add a comment..."></input>
//                         </>
//                     </div>
                
//             ))}
//         </>
//     )
// }

const DummyData = props => {
    return (
        <>
            {props.dummyData.map(e => (
                    <div>
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <>
                                    <PostContainer commentsarray={e.comments} likes={e.likes} timestamp={e.timestamp}/>
                                </>
                                <>
                                    <input placeholder="Add a comment..."></input>
                                </>
                            </CardBody>
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