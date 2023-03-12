// function to like a movie
function LikeMovie({id, movies, setMovies}) {
    movies[id].likes++;
    setMovies(movies);
  }

  export default LikeMovie;