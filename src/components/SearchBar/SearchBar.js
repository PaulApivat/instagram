import React from 'react';
import './SearchBar.css';
import './instagram-logo.png';
import './Instagram-Letter.png'
import './like.png';
import './compass.png';
import './person.png';
import styled from 'styled-components';



const instaLogo = './instagram-logo.png';
const instaLetter = './Instagram-Letter.png';
const likeImg = './like.png';
const compass = './compass.png';
const person = './person.png';


const HeaderWrapper = styled.div`
    border-top: 3px solid gray;
    border-bottom: 3px solid gray;
    height: 100px;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    padding-top: 20px;
`;

const LogoHeader = styled.div`
    height: 35px;
`;

const LogoImage = styled.img`
    height: 35px;
`;

const IconCluster = styled.div`
    width: 15%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const SearchBarStyle = styled.div`
    height: 40px;
    width: 25%;
`

const InputStyle = styled.input`
    height: 35px;
    width: 100%;
    text-align: center;
`


class SearchBar extends React.Component {
    constructor(){
        super();
        this.state = {
            searchterm: '',
        }
    }


    handleChange = (event) => {
        this.setState({searchterm: event.target.value });
        //props passed down from App.js
        this.props.filterPost(this.state.searchterm)
    }


    render(){
        return(
            <HeaderWrapper>
                <LogoHeader>
                    <LogoImage src={instaLogo} alt="insta logo"/> | <LogoImage src={instaLetter} alt="Instagram" />
                </LogoHeader>
                <SearchBarStyle>
                    <InputStyle value={this.state.searchterm} onChange={this.handleChange} placeholder="Search" />
                </SearchBarStyle>
                <IconCluster>
                    <LogoImage className="compass" src={compass} alt="compass"/> 
                    <LogoImage src={likeImg} alt="heart"/> 
                    <LogoImage className="person" src={person} alt="person"/>
                </IconCluster>
            </HeaderWrapper>
        )
    }
}

export default SearchBar

/* <div className="searchbar-container">
                <div>
                    <img className="instalogo" src={instaLogo} alt="insta logo"/> | <img className="instaletter" src={instaLetter} alt="Instagram" />
                </div>
                <div className="searchbar">
                    <input value={this.state.searchterm} onChange={this.handleChange} placeholder="Search" />
                </div>
                <div className="icon-cluster">
                    <img className="compass" src={compass} alt="compass"/> 
                    <img className="" src={likeImg} alt="heart"/> 
                    <img className="person" src={person} alt="person"/>
                </div>
</div> */