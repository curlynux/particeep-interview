// function to render all movie
import DeleteButton from './deleteButton';

function AllMovie({id, title, category, like, dislike, movies, setMovies}) {

    return (
      <div className='movie'>
        <div id={id}>
          <h3>{title}</h3>
          <p>{category}</p>
          <span>{like}</span>
          <span>{dislike}</span>
        </div>
        <DeleteButton key={id} id={id} movies={movies} setMovies={setMovies}/>
      </div>
    )
  }

  export default AllMovie;