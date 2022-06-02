import React from 'react';
import styles from "../styles/Search.module.css";

export default function SearchBar({onSearch}) {
 
  const [nombreCiudad,setnombreCiudad] = React.useState('');
  
  function onChange(e){
    setnombreCiudad(e.target.value);
  }

  return(
    
    <form 
      className={styles.searchContainer} 
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(nombreCiudad);
        setnombreCiudad("");  
    }}>

      <input  placeholder='Ingrese una ciudad...' type="text" id='inputSearch' onChange={onChange} />
       <input type="submit"  value= 'agregar'className={styles.searchButton}/>
    </form>
    
  ) 
  };