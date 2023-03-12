import { useState } from "react";
import { useSelector } from "react-redux";

function Category({ categories }) {
    const _categories = [];
    
    categories.forEach(category => {
      if (!_categories.includes(category)) {
        _categories.push(category);
      }
    });
    
    return (
         <>
            {_categories.map((category, index) => (
            <option key={index} >{category}</option>
          ))}
         </>
    );
  }
  
  
  
  
  export default Category;