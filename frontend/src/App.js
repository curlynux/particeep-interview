import './App.css';
import { movies$ } from './data/movies';
import {useEffect, useState} from "react"
import AllMovie from './components/AllMovie';
import {useSelector, useDispatch} from "react-redux";
import { setRemove, setLike, setDisLike } from "./redux/allMovies";

function App() {
const dispatch = useDispatch();
const [movies, setMovies] = useState([]);
  useEffect(() => 
{
  movies$.then(data => 
  {
    setMovies(data)

    // data.map(item => 
    // {
    //   dispatch(setLike(item.like))
    //   dispatch(setDisLike(item.dislike))
    // });
  });
}, [])

  return (
    <div className="App">
      test
      {movies.map(item => 
      {
        return <AllMovie 
        key={item.id}
        id={item.id}
        title={item.title}
        category={item.category}
        like={item.likes}
        dislike={item.dislikes}
        movies={movies}
        setMovies={setMovies}
        />
      })}
    </div>
  );
}

export default App;
