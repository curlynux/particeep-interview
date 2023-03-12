function DeleteButton({id, movies, setMovies})
{
    
    function handleClick() {
        setMovies(movies.filter(movie => movie.id !== id));
    }

    return(
        <button onClick={handleClick}>supprimer</button>
    )
}

export default DeleteButton;