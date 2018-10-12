import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import UsernameStyle from '../../Styles/Resusables/UsernameStyle';
import styled from 'styled-components';

const CardTextDiv = styled.div`
    display: flex;
`

const CommentText = styled.div`
    width: 75%;
    padding-left: 5px;
`

class CommentSection extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <CardBody>
                <CardTextDiv>
                        <UsernameStyle>{this.props.username}</UsernameStyle> 
                        <CommentText>{this.props.text} </CommentText>
                </CardTextDiv>
            </CardBody>
        )
    }
}




CommentSection.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CommentSection;