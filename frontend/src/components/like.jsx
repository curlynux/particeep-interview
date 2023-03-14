import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "../redux/allMovies";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Like({id, like, movies, setMovies})
{
    const dispatch = useDispatch();
    var _like = useSelector((state) => state.movie.like);
    useEffect(() => {dispatch(setLike(_like))}, [_like])
    useEffect(() => {dispatch(setLike(like))}, []);
    function handleLike()
    {
        movies.map(movie => 
        {
            if(movie.id === id)
            {
                console.log(movie.id - 1, parseInt(id) -1);
                dispatch(setLike(300))
                console.log(movies[id].likes = 111111);
                console.log("_like",_like, "like",like);
            }
        });
    }

    

    return (
        <>
            
            <span onChange={handleLike}> 
            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" onClick={handleLike} />
            like: {like}
            </span>
        </>
    )
}

export default Like;