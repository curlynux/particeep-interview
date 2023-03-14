function Category({ categories }) {
    const _categories = [];
    
    categories.forEach(category => {
      if (!_categories.includes(category)) {
        _categories.push(category);
      }
    });
    
    _categories.unshift("tous")
    return (
         <>
            {_categories.map((category, index) => (
            <option key={index} >{category}</option>
          ))}
         </>
    );
  }
  
  
  
  
  export default Category;