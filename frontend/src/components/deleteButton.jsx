import { useDispatch } from "react-redux";

function DeleteButton({ id, movies, setMovies }) {
	const dispatch = useDispatch();
	function handleClick() {
		dispatch(setMovies(movies.filter((movie) => movie.id !== id)));
	}

	return (
		<button className="deleteBtn" onClick={handleClick}>
			X
		</button>
	);
}

export default DeleteButton;
