import React from 'react';
import './SearchBar.css';
import './instagram.png';
import './Instagram-Letter.png'


const instaLogo = './instagram.png';
const instaLetter = './Instagram-Letter.png';


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
                    <img className="instalogo" src={instaLogo} alt="insta logo"/> | <img src={instaLetter} alt="Instagram" />
                </div>
                <div className="searchbar">
                    <input value={this.state.searchterm} onChange={this.handleChange} placeholder="Search" />
                </div>
                <div>Icons</div>
            </div>
        )
    }
}

export default SearchBar