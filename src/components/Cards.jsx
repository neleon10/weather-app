import React from "react";
import Card from "./Card";
import styles from "../styles/Cards.module.css";


export default function Cards( {cities,onClose} ) {
  // acá va tu código
  // tip, podés usar un map
  

  return (
    <div className={styles.cardsContainer}> {/* al no tener llaver abiertas en el map la => funciona como return */}
      {cities.map((city) => ( 
        <Card
          key={city.id}
          min={city.min}
          max={city.max}
          name={city.name}
          img={city.img}
          onClose={()=> onClose(city.id)}
        />
      ))}
    </div>
  );
}
