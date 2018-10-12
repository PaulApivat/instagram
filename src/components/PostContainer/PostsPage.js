import React from 'react';
import dummyData from '../../dummy-data';
import DummyData from '../../DummyData';
import SearchBar from '../SearchBar/SearchBar'
import PropTypes from 'prop-types';


class PostsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount(){
        this.setState({data: dummyData});
        // This console.log shows an empty array
        console.log(this.state.data)
    }
    
    // filterPost = (str) => {
    //     const posts = dummyData;
    //     const filteredpost = posts.filter((post) => {
    //         return post.username.includes(str)
    //     })
    //     this.setState({data: filteredpost});
    // }

    filterPost = (str) => {
        const posts = dummyData;
        const filteredpost = posts.filter((post) => {
            return post.username.includes(str)
        })
        this.setState({data: filteredpost});
    }



    render(){
        // This console.log shows the FULL dummyData array
        console.log(this.state.data)
        return (
        <div>
            <SearchBar filterPost={this.filterPost} />
            <DummyData dummyData={this.state.data} />
        </div>
        )
    }
}

PostsPage.defaultProps = {
    data: []
}

PostsPage.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.array
        })
    ).isRequired
};

export default PostsPage