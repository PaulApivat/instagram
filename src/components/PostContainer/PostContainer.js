import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';
import './like.png';
import './conversation.png';
import styled from 'styled-components';
import moment from 'moment';


const likeImg = './like.png';
const conversation = './conversation.png';


const LogoImage = styled.img`
    height: 25px;
`;

const IconDiv = styled.div`
    margin-top: 30px;
    width: 10%;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
`

const TimeStampDiv = styled.div`
    font-size: 12px;
    padding-left: 20px;
    margin-bottom: 25px;
`


//PostContainer class component holds state - counter, username, text and empty commentsarray
class PostContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 10,
            username: 'static username',
            text: '',
            commentsarray: [],
            likes: 0,
            timestamp: '',
        }
    }

    componentDidMount(){
        this.setState({
            //passing down props from DummyData.js, containing all data
            // re-route number of likes, passed down, set to counter
            commentsarray: this.props.commentsarray,
            counter: this.props.likes,
            timestamp: this.props.timestamp,
        })
        console.log(moment(Date.now(this.props.timestamp)).fromNow())
    }

    // re-routed counter starts counting from previous number of likes
    handleIncrease = () => {
        this.setState(previousState => {
            return {
                counter: previousState.counter + 1,
            }
        })
    }



    handleChange = (event) => {
        this.setState({text: event.target.value });
        // Will render, in real-time, what is TYPED in the input, WITHOUT being submitted, 
        console.log(event.target.value)
    }

    addNewComment = () => {
        //destructuring?
        const {commentsarray, username, text} = this.state;
        this.setState({commentsarray: [...commentsarray, {username, text }]});
        // this.setState({commentsarray: [...this.state.commentsarray, {username: this.state.username, text: this.state.text }]});

        // Once new comment is added, it shows up in handleSubmit first, then in this function
        console.log(commentsarray)
    }

    handleSubmit = (event) => {
        // NEW COMMENTS, once submitted show up here in this.state
        event.preventDefault();
        this.addNewComment({username: this.state.username, text: this.state.text});
        this.setState({text: this.state.text, username: this.state.username});
        this.setState({text: ' '});
        // this console.log shows PostContainer's current state {counter: 0, username: "static username", text: "a"}
        // and commentsarray being passed as a prop from DummyData -- pre-existing data
        console.log(this.state) 
        console.log(this.state.text)
        console.log(this.props.commentsarray)
    }


    render(){
        return (
            <div>

                <IconDiv>
                    <LogoImage onClick={this.handleIncrease} src={likeImg} alt="like image"/>
                    <LogoImage src={conversation} alt="conversation"/>
                </IconDiv>

                <div className="likes">
                    Likes: {this.state.counter}
                </div>
                <div>
                    {this.state.commentsarray.map(comments => (
                        <div>
                            <CommentSection username={comments.username} text={comments.text}/> 
                        </div>
                    ))}
                </div>

                <TimeStampDiv>
                    {moment(Date.now(this.props.timestamp)).startOf('day').fromNow()}
                </TimeStampDiv>

                <form onSubmit={this.handleSubmit}>
                     <input className="inputbox" type="text" value={this.state.text} onChange={this.handleChange} placeholder="Add a comment..." />
                </form>
            </div>
        )
    }  
}


PostContainer.defaultProps = {
    counter: 0,
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
