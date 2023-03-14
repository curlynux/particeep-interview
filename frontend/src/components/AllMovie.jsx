// function to render all movie
import { useSelector } from 'react-redux';
import DeleteButton from './deleteButton';
import Like from './like';
import DisLike from './disLike';
// function fetchMoviePoster(title, apiKey) {
//   // Construct the search query using the movie title
//   const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`;
  
//   // Make the API call to search for the movie
//   const response =  fetch(searchUrl);
//   const responseJson =  response.json();
//   console.log(response);
//   // Check if any results were found
//   if (responseJson.total_results === 0) {
//     console.log(`No results found for movie title '${title}'`);
//     return null;
//   }
  
//   // Get the ID of the first movie in the search results
//   const movieId = responseJson.results[0].id;
  
//   // Construct the API query to fetch the poster for the movie
//   const posterUrl = `https://api.themoviedb.org/3/movie/${movieId}/poster?api_key=${apiKey}`;
  
//   // Make the API call to fetch the poster for the movie
//   const posterResponse =  fetch(posterUrl);
//   const posterResponseJson =  posterResponse.json();
  
//   // Check if a poster was found
//   if (posterResponseJson.file_path === null) {
//     console.log(`No poster found for movie '${title}'`);
//     return null;
//   }
  
//   // Get the URL of the poster image
//   const posterImageUrl = `https://image.tmdb.org/t/p/w500${posterResponseJson.file_path}`;
  
//   return posterImageUrl;
// }
// const posterUrl = fetchMoviePoster("The Shawshank Redemption", "your_api_key_here");
// console.log(posterUrl);

function AllMovie({id, title, category, like, dislike, movies, setMovies, edit}) {

  // const like = useSelector((state) => state.movie.like);

    return (
      <div className='movie'>
        <div id={id} className="id">
        {edit && <DeleteButton key={id} id={id} movies={movies} setMovies={setMovies}/>}
          <div className='stuff'>
            <Like id={id} like={like} movies={movies} setMovies={setMovies}/>
            <DisLike id={id} dislike={dislike} movies={movies} setMovies={setMovies} />
            <div className='info'>
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default AllMovie;