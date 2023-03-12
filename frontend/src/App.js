import './App.css';
import { movies$ } from './data/movies';
import {useEffect, useState} from "react"
import AllMovie from './components/AllMovie';
import {useSelector, useDispatch} from "react-redux";
import { setRemove, setCategory, setLike, setDisLike } from "./redux/allMovies";
import Category from "./components/category";


function App() {
const dispatch = useDispatch();
const [movies, setMovies] = useState([]);
const [moviesBackup, setMoviesBackup] = useState([]);
const [categories, setCategories] = useState([]);
const selection = useSelector((state) => state.movie.category)

useEffect(()=> {
  if (!selection)
    return ;
  setMovies(moviesBackup.filter(movie=>movie.category === selection));
}, [selection]);

useEffect(() => 
{
  movies$.then(movie => 
  {
    setMovies(movie);
    setMoviesBackup(movie);
    movie.forEach(movie=> {
      categories.push(movie.category);
      setCategories(categories);
    });
  })
  movies.map(item => 
  {
    dispatch(setLike(item.likes));
    dispatch(setDisLike(item.dislikes));
  });
}, [])

function handleChange(event)
    {
        dispatch(setCategory(event.target.value));
        // setCategory(event.target.value);
        console.log("changed !");
        console.log(event.target.value);

    }

  return (
    <div className="App">
      <div className="categories">
        <label htmlFor="categories">choose a category:</label>
        <select name="category" id="category" onChange={handleChange}>
            <Category categories={categories}/>
        </select>
      </div>
 
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
