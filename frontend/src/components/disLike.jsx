import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisLike } from "../redux/allMovies";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


function DisLike({movies, dislike})
{
    const _dislike = useSelector((state) => state.movie.dislike);
    // const movies = useSelector((state) => state.movie.movies);
    const dispatch = useDispatch();
    useEffect(() => 
    {
        console.log(movies);
        movies.map(item => 
        {
            console.log("TEST MOVIE", item);
            // dispatch(setDisLike(item.dislikes));
        });
    }, [])

    return (
        <>
            <FontAwesomeIcon icon="fa-solid fa-thumbs-down" />
            <span>{dislike}</span>
        </>
    )
}

export default DisLike;