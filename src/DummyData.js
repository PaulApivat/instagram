import React from 'react';
import PostContainer from './components/PostContainer/PostContainer'
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './DummyData.css';
import SearchBar from './components/SearchBar/SearchBar'


class DummyData extends React.Component {
    constructor(){
        super();

    }

    render(){
        return(
            <div>
            <>
                <SearchBar searchbar={this.props.searchbar} />
            </>
            <>
                {this.props.dummyData.map(alldata => (
                        <div key={alldata.timestamp}>
                            <Card className="main-container">
                                    <div className="header-container">
                                        <div className="thumbnail-image-container">
                                            <img className="thumbnail-image" src={alldata.thumbnailUrl} alt="Thumbnail Image" />
                                        </div>
                                        <div className="username">
                                            {alldata.username}
                                        </div>
                                    </div>
                                <CardImg className="image" top width="100%" 
                                    src={alldata.imageUrl} alt="Main Image" 
                                />
                                <PostContainer 
                                    commentsarray={alldata.comments} 
                                    likes={alldata.likes} 
                                    timestamp={alldata.timestamp}

                                />
                                <form onSubmit={this.props.addNewComment}>
                                    <input placeholder="Add a comment..." />
                                </form>

                            </Card>
                        </div>
                ))}
            </>
        </div>
        )
    }
}


// const DummyData = props => {
//     return (
//         <div>
//             <>
//                 <SearchBar searchbar={props.searchbar} />
//             </>
//             <>
//                 {props.dummyData.map(alldata => (
//                         <div key={alldata.timestamp}>
//                             <Card className="main-container">
//                                     <div className="header-container">
//                                         <div className="thumbnail-image-container">
//                                             <img className="thumbnail-image" src={alldata.thumbnailUrl} alt="Thumbnail Image" />
//                                         </div>
//                                         <div className="username">
//                                             {alldata.username}
//                                         </div>
//                                     </div>
//                                 <CardImg className="image" top width="100%" 
//                                     src={alldata.imageUrl} alt="Main Image" 
//                                 />
//                                 <PostContainer 
//                                     commentsarray={alldata.comments} 
//                                     likes={alldata.likes} 
//                                     timestamp={alldata.timestamp}

//                                 />
//                                 <form>
//                                     <input placeholder="Add a comment..." />
//                                 </form>

//                             </Card>
//                         </div>
//                 ))}
//             </>
//         </div>
//     )
// }


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