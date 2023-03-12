// import {useEffect, useState } from "react";

function Category({ movies }) {
    const categories = [];
    movies.forEach(movie => {
      if (!categories.includes(movie.category)) {
        categories.push(movie.category);
      }
    });
  
    return (
      <div>
        <h2>Categories:</h2>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
      </div>
    );
  }
  
  
  
  
  export default Category;