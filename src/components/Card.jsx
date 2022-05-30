import React from "react";
import CardTemp from "./Card-temp";
import PropTypes from 'prop-types';

export default function Card({ max, min, name, img, onClose }) {
  //destructuring
  // acá va tu código
  function handOnclose() {
    if (typeof onClose === "function") onClose();
  }
  return (
    <div>
      <button onClick={handOnclose}>X</button>
      <span>{name}</span>
      <CardTemp label="Min" value = {min}/>
      <CardTemp label="Max" value = {max}/>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="imagen de clima"
      />
    </div>
  );
}

/*En caso de no usar TypeScript, podemos usar Proptypes 
para chequear en este caso que a CARD le llegan los valores adecuados y no Otros.
*/

Card.propTypes = {
  max : PropTypes.number,
  min : PropTypes.number,
  name : PropTypes.string,
  img : PropTypes.string,
  onClose : PropTypes.func
}