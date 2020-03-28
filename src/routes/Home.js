import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

class Home extends React.Component{
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
      const {isLoading, movies} = this.state;
      console.log(`isLoading : ${isLoading}`)
      return(
      <div>
        {isLoading ? (
          <div className="loader">
             <span className="loader__text">Loading..</span> 
           </div>
        ):( 
          <div className="movies">
            {movies.map(movie=>(
              <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
          />
            ))}
          </div>
        )
        }
      </div>
      )
    }
  }