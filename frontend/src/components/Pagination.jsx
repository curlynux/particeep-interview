import { useEffect, useState } from "react";
import AllMovie from "./AllMovie";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/allMovies";
import {setElementsPerPage} from "../redux/allMovies";

function MovieList({ movies, setMovies }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
const elementsPerPage = useSelector((state) => state.movie.elementsPerPage)

  useEffect(() => 
  {
    dispatch(setPage(currentPage))
  }, [])
  useEffect(() => 
  {
    dispatch(setPage(currentPage))
  }, [currentPage])
  const totalPages =  Math.ceil(movies.length / elementsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleElementsPerPageChange = (event) => {
    console.log('event ok', event.target.value);
    dispatch(setElementsPerPage(parseInt(event.target.value)));
    setCurrentPage(1);
  };

  const lastIndex = currentPage * elementsPerPage;
  const firstIndex = lastIndex - elementsPerPage;

  const currentElements = movies.slice(firstIndex, lastIndex).map((item) => {
    return (
      <AllMovie
        key={item.id}
        id={item.id}
        title={item.title}
        category={item.category}
        like={item.likes}
        dislike={item.dislikes}
        movies={movies}
        setMovies={setMovies}
        
      />
    );
  });

  return (
    <div>
      {currentElements}
      <div>
        <select value={elementsPerPage} onChange={handleElementsPerPageChange}>
          <option value="4" >4 par page</option>
          <option value="8">8 par page</option>
          <option value="12">12 par page</option>
        </select>
        
        <p>
          Page {currentPage} sur {totalPages}
        </p>
      </div>
    </div>
  );
}

export default MovieList;
