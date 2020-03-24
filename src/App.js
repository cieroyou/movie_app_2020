import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async () =>{
    console.log('request Movies List to yts server');
    const movies = await axios('https://yts-proxy.now.sh/list_movies.json');

  }
  componentDidMount(){
    console.log('component did mount')
    console.log('start setState and isLoading will changed after 6 seconds later')
    this.getMovies();
    setTimeout(()=>{
    console.log('isLoading changed [true] -> [false]')
      this.setState({isLoading : false})
    },6000)

  }
  render(){
    const {isLoading} = this.state;
    console.log(`isLoading : ${isLoading}`)
    return(
    <div>
      {isLoading ? "Loading..." : "We are ready!"}
    </div>
    )
  }
}

export default App;
