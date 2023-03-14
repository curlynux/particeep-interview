import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisLike } from "../redux/allMovies";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


function DisLike({id, dislike})
{
    const _dislike = useSelector((state) => state.movie.dislike);
    const dispatch = useDispatch();

    function handleChange()
    {
        dispatch(setDisLike(_dislike--))
        console.log("LIKE UPDATED !", _dislike);
    }
    useEffect(() => {dispatch(setDisLike(dislike))}, []);

    return (
        <>
            
            <span>
                <FontAwesomeIcon icon="fa-solid fa-thumbs-down" onClick={handleChange} />
                dislike:{dislike} 
            </span>
        </>
    )
}

export default DisLike;