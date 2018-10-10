import React from 'react';
// import dummyData from '../../dummy-data';
// import DummyData from '../../DummyData';
// import SearchBar from './components/SearchBar/SearchBar'


class PostsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [],
        }
    }

    // componentDidMount(){
    //     this.setState({data: dummyData});
    //     // This console.log shows an empty array
    //     console.log(this.state.data)
    // }
    
    // filterPost = (str) => {
    //     const posts = dummyData;
    //     const filteredpost = posts.filter((post) => {
    //         return post.username.includes(str)
    //     })
    //     this.setState({data: filteredpost});
    // }



    render(){
        return (
        // <div className="App">
        <div>
            {/* <SearchBar filterPost={this.filterPost}/>
            <DummyData dummyData={this.state.data} /> */}
            The Posts Page
        </div>
        )
    }
}

export default PostsPage