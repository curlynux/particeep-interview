function Category({ movies }) {
    const categories = [];
    movies.forEach(movie => {
      if (!categories.includes(movie.category)) {
        categories.push(movie.category);
      }
    });
  
    return (
         <>
                         {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
         </>
    );
  }
  
  
  
  
  export default Category;