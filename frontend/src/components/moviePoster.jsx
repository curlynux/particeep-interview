import { useEffect, useState } from "react";

function MoviePoster({ title }) {
	const [moviePoser, setMoviePoster] = useState("");

	function fetchMoviePoster(title, apiKey) {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}=${title}`,
			{
				method: "GET",
				mode: "cors",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		).then(async (response) => {
			await response.json().then((data) => {
				data.results.forEach(async (result) => {
					console.log(result.poster_path);
					await setMoviePoster(
						`https://image.tmdb.org/t/p/w500${result.poster_path}`
					);
				});
			});
		});
	}
	useEffect(() => {
		fetchMoviePoster(title, "12a6d4f62b04c5425a68bcfeb4f0db6e&query");
	}, []);

	return <img src={moviePoser} />;
}

export default MoviePoster;
