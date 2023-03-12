import { useState } from "react";
import { useSelector } from "react-redux";
import { setCategory } from "../redux/allMovies";

function Category({ movies }) {
    const categories = [];
    const categoryState = useSelector((state) => state.movie.category)
    movies.forEach(movie => {
      if (!categories.includes(movie.category)) {
        categories.push(movie.category);
      }
    });
    
    return (
         <>
            {categories.map((category, index) => (
            <option key={index} >{category}</option>
          ))}
         </>
    );
  }
  
  
  
  
  export default Category;