import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisLike } from "../redux/allMovies";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


function DisLike({id, dislike})
{
    // console.log(id);
    const _dislike = useSelector((state) => state.movie.dislike);
    // const movies = useSelector((state) => state.movie.movies);
    const dispatch = useDispatch();

    function handleChange()
    {
        dispatch(setDisLike(_dislike--))
        console.log("LIKE UPDATED !", _dislike);
    }
    useEffect(() => {dispatch(setDisLike(dislike))}, []);
    

    

    return (
        <>
            <FontAwesomeIcon icon="fa-solid fa-thumbs-down" onClick={handleChange} />
            <span>{dislike}</span>
        </>
    )
}

export default DisLike;