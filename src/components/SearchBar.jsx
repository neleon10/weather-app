import React from 'react';
import styles from "../styles/Search.module.css";

export default function SearchBar(props) {
  // acá va tu código
 function handleOnSearch(){
   const input = document.getElementById('inputSearch')
   props.onSearch(input.value)
 }
  

  return(
    
    <div className={styles.searchContainer}>
      <input  placeholder='Ingrese una ciudad...' type="text" id='inputSearch'/>
       <button className={styles.searchButton} onClick={handleOnSearch}>Agregar</button>
    </div>
    
  ) 
  
  };