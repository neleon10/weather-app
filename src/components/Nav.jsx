import React from "react";
import SearchBar from "./SearchBar.jsx";
import styles from "../styles/Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({onSearch}) {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.interDivs}>
          <Link to = '/' className={styles.textlink}>
           <p className={styles.font}>Weather APP</p>
          </Link>
        </div>
        <div className={styles.interDivs}>
          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </>
  );
}
