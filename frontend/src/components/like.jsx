import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "../redux/allMovies";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Like({movies, like})
{
    const dispatch = useDispatch();
    const _like = useSelector((state) => state.movie.like);
    function handleChange()
    {
        dispatch(setLike(_like))
        console.log("LIKE UPDATED !");
    }

    // const movies = useSelector((state) => state.movie.movies);
    useEffect(() => 
    {
        console.log(movies);
        movies.map(item => 
        {
            // console.log("TEST MOVIE", item);
            // dispatch(setDisLike(item.dislikes));
        });
    }, [])

    return (
        <>
        <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
        <span onChange={handleChange}>{like}</span>
        </>
    )
}

export default Like;