import './assets/smartphone/main.css';
import "./App.css"
import { movies$ } from './data/movies';
import {useEffect, useState} from "react"
import AllMovie from './components/AllMovie';
import {useSelector, useDispatch} from "react-redux";
import { setRemove, setNewCategory, setElementsPerPage, setMovies, setLike, setDisLike } from "./redux/allMovies";
import Category from "./components/category";
import Pagination from "./components/Pagination"
import { library } from '@fortawesome/fontawesome-svg-core';
import {fab, fas} from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faThumbsUp, faThumbsDown)

function App() {
const dispatch = useDispatch();
const movies = useSelector((state) => state.movie.movies)
const [moviesBackup, setMoviesBackup] = useState([]);
const [categories, setCategories] = useState([]);
const selection = useSelector((state) => state.movie.category);
const elementsPerPage = useSelector((state) => state.movie.elementsPerPage);
const [edit, setEdit] = useState(false);
const _like = useSelector((state) => state.movie.like);
const _disLike = useSelector((state) => state.movie.like)

useEffect(()=> {
  if (!selection)
    return ;
  dispatch(setMovies(moviesBackup.filter(movie=>movie.category === selection)));
}, [selection]);

useEffect(() => 
{
  movies$.then(movie => 
  {

    dispatch(setMovies(movie));
    setMoviesBackup(movie);
    movie.forEach(item=> {
      categories.push(item.category);
      dispatch(setNewCategory(selection));
    });
  })
  movies.map(item => 
  {
    dispatch(setLike(item.likes));
    dispatch(setDisLike(item.dislikes));
  });
}, [])

function handleCategoryChange(event)
    {
        dispatch(setNewCategory(event.target.value));
        console.log("changed !");
        console.log(event.target.value);
        if (event.target.value === "tous") {
          dispatch(setMovies(movies));
        } else {
          const filteredMovies = movies.filter(movie => movie.category === event.target.value);
          console.log(filteredMovies);
          dispatch(setMovies(filteredMovies));
        }
          
    }
  // 
  return (
    <div className="App">
      <div className="categories">
        <label htmlFor="categories">choose a category:</label>
        <select name="category" id="category" onChange={handleCategoryChange}>
            <Category categories={categories}/>
        </select>
        <button style={{
          backgroundColor: edit ? "red" :  "green",
        }}
        onClick={() => setEdit(edit ? false : true)}>editer</button>
      </div>

      <div className='wrapper'>
      {movies.slice(0, elementsPerPage).map(item => 
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
        edit={edit}
        
        />
      })}
      </div>
    <Pagination movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
