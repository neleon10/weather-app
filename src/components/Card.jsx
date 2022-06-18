import React from "react";
import CardTemp from "./Card-temp";
import PropTypes from "prop-types";
import styles from "../styles/Card.module.css";
import { Link } from "react-router-dom";

                                     //destructuring 
export default function Card({ max, min, name, img, onClose, id }) {
 
  function handOnclose() {
    if (typeof onClose === "function") onClose();
  }

  return (
    <div className={[styles.cardContainer, styles.font, styles["d-flex-c"]].join(" ")}>
      <button className={styles.button} onClick={handOnclose}>
        X
      </button>
      <Link to={`/ciudad/${id}`}style={{textDecoration: 'inherit'}} >
        <span className={styles.cityName}>{name}</span>
      </Link>

      <div className={styles.CardTemperature}>
        <CardTemp label="Min" value={min} />
        <CardTemp label="Max" value={max} />
      </div>
      <div className={styles.cardImage}>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="imagen de clima"
        />
      </div>
    </div>
  );
}

/*En caso de no usar TypeScript, podemos usar Proptypes 
para chequear en este caso que a CARD le llegan los valores adecuados y no Otros.
*/

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};
