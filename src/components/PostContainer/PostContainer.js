import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';
import './like.png';

const likeImg = './like.png';

class PostContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }

    handleIncrease = () => {
        this.setState(previousState => {
            return {
                counter: previousState.counter + 1
            }
        })
    }

    render(){
        return (
            <div>

                <div onClick={this.handleIncrease}>
                    <img src={likeImg} alt="like image"/>
                </div>

                <button onClick={this.handleIncrease}> Increase New Likes </button>

                <div className="likes">
                    Likes: {this.props.likes},
                    New Likes: {this.state.counter}
                </div>
                <div>
                    {this.props.commentsarray.map(comments => (
                        <div>
                            <CommentSection username={comments.username} text={comments.text}/> 
                        </div>
                    ))}
                </div>
                <div className="timestamp">
                    Time: {this.props.timestamp}
                </div>
            </div>
        )
    }  
}


PostContainer.defaultProps = {
    likes: 0,
    username: '',
    text: '',
    timestamp: Date.now()
}

PostContainer.propTypes = {
    commentsarray: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    ).isRequired
};

export default PostContainer;
