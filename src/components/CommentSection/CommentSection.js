import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import UsernameStyle from '../../Styles/Resusables/UsernameStyle';
import styled from 'styled-components';

const CardTextDiv = styled.div`
    border: 1px solid blue;
    display: flex;
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
                        <div>{this.props.text} </div>
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