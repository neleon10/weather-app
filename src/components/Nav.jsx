import React from "react";
import SearchBar from "./SearchBar.jsx";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.interDivs}>
          <p className={styles.font}>Weather APP</p>
        </div>
        <div className={styles.interDivs}>
          <SearchBar />
        </div>
      </nav>
    </>
  );
}
