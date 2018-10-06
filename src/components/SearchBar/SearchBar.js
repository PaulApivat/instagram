import React from 'react';
import './SearchBar.css';
import './instagram.png';
import './Instagram-Letter.png'

const instaLogo = './instagram.png';
const instaLetter = './Instagram-Letter.png';

// const SearchBar = props => {
//     return (
//         <div className="searchbar-container">
//             <div>
//                 <img src={props.instaLogo} alt="insta logo"/> | <img src={props.instaLetter} alt="Instagram" />
//             </div>
//             <div>Search Bar</div>
//             <div>Icons</div>
//         </div>
//     )
// }

class SearchBar extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="searchbar-container">
                <div>
                    <img className="instalogo" src={instaLogo} alt="insta logo"/> | <img src={instaLetter} alt="Instagram" />
                </div>
                <div className="searchbar">
                    <input placeholder="Search" />
                </div>
                <div>Icons</div>
            </div>
        )
    }
}

export default SearchBar