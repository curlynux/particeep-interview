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
        movies.map(item => 
        {
            if(item.id === id)
            {
                console.log(item.id - 1, parseInt(id) -1);
                dispatch(setLike(like))
                console.log("DERNIER",_like, "PREMIER",like);
                // dispatch(setLike())
            }
        });
    }

    

    return (
        <>
            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" onClick={handleLike} />
            <span onChange={handleLike}>{like}</span>
        </>
    )
}

export default Like;