import React from 'react';
import styles from "../styles/Search.module.css";

export default function SearchBar(props) {
  // acá va tu código
  //<SearchBar onSearch={(ciudad) => alert(ciudad)} />
  

  return(
    
    <div className={styles.searchContainer}>
      <input  placeholder='Ingrese una ciudad...' type="text" id='inputSearch'/>
       <button className={styles.searchButton}>Agregar</button>
    </div>
    
  ) 
  
  };