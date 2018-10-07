import React from 'react';
import './SearchBar.css';
import './instagram-logo.png';
import './Instagram-Letter.png'
import './like.png';
import './compass.png';
import './person.png';
import './search-icon.png';

const instaLogo = './instagram-logo.png';
const instaLetter = './Instagram-Letter.png';
const likeImg = './like.png';
const compass = './compass.png';
const person = './person.png';
const searchIcon = './search-icon.png';

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
            <div className="searchbar-container">
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
            </div>
        )
    }
}

export default SearchBar