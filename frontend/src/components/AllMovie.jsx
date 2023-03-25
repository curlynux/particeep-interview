import { useSelector } from 'react-redux';
import DeleteButton from './deleteButton';
import Like from './like';
import DisLike from './disLike';
import MoviePoster from './moviePoster';
import {memo} from "react";

function AllMovie({id, title, category, like, dislike, movies, setMovies, edit}) {

    return (
      
      <div className='movie'>
        <div id={id} className="id">
        {edit && <DeleteButton key={id} id={id} movies={movies} setMovies={setMovies}/>}
        <MoviePoster title={title.replace(/ /g, "+")} />
          <div className='stuff'>
            <div className='rate'>
            <Like id={id} like={like} movies={movies} setMovies={setMovies}/>
            <DisLike id={id} dislike={dislike} movies={movies} setMovies={setMovies} />
            </div>
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