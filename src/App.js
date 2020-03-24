import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async () =>{
    console.log('request Movies List to yts server');
    // const movies = await axios('https://yts-proxy.now.sh/list_movies.json');
    // console.log(movies.data.data.movies)
    // data-data-movies 에 원하는 데이터가 들어있음, 위의 문구를 es6를 사용하여 다음 코드로 변경
    const {data:{data:{movies}}} = await axios('https://yts-proxy.now.sh/list_movies.json');
    this.setState({movies:movies, isLoading: false});

  }
  componentDidMount(){
    console.log('component did mount')
    console.log('start setState and isLoading will changed when get movieData from yts')
    this.getMovies();
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
