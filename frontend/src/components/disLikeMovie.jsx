// function to dislike a movie
function DislikeMovie({id, movies, setMovies}) {
    movies[id].dislikes--;
    setMovies(movies);
  }

  export default DislikeMovie;