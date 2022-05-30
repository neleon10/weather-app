import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
 function handleOnSearch(){
   const input = document.getElementById('inputSearch')
   props.onSearch(input.value)
 }
  



  return(
    
    <div>
      <input type="text" id='inputSearch'/>
       <button onClick={handleOnSearch}>Agregar</button>
       <br />
       <br />
    </div>
    
  ) 
  
  };