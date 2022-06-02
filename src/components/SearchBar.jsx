import React from "react";
import styles from "../styles/Search.module.css";

export default function SearchBar({ onSearch }) {
  const [nombreCiudad, setnombreCiudad] = React.useState("");

  function onChange(e) {
    setnombreCiudad(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSearch(nombreCiudad);
    setnombreCiudad("");
  }

  return (
    <form className={styles.searchContainer} onSubmit={submit}>
      <input
        placeholder="Ingrese una ciudad..."
        type="text"
        id="inputSearch"
        onChange={onChange}
        value={nombreCiudad}
      />
      <input type="submit" value="agregar" className={styles.searchButton} />
    </form>
  );
}
