// function to render all movie
import { useSelector } from 'react-redux';
import DeleteButton from './deleteButton';
import Like from './like';
import DisLike from './disLike';
import MoviePoster from './moviePoster';
// const posterUrl = fetchMoviePoster("The Shawshank Redemption", "12a6d4f62b04c5425a68bcfeb4f0db6e");
// console.log(posterUrl);

function AllMovie({id, title, category, like, dislike, movies, setMovies, edit}) {

  // const like = useSelector((state) => state.movie.like);
  // console.log(title.replace(/ /g, "+"));
  // fetchMoviePoster(title.replace(/ /g, "+"), "12a6d4f62b04c5425a68bcfeb4f0db6e&query")
    return (
      <div className='movie'>
        <div id={id} className="id">
        {edit && <DeleteButton key={id} id={id} movies={movies} setMovies={setMovies}/>}
        <MoviePoster title={title.replace(/ /g, "+")} />
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