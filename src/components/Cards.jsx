import React from "react";
import Card from "./Card";

export default function Cards( {cities} ) {
  // acá va tu código
  // tip, podés usar un map
  

  return (
    <div> {/* al no tener llaver abiertas en el map la => funciona como return */}
      {cities.map((city) => ( 
        <Card
          key={city.id}
          min={city.main.temp_min}
          max={city.main.temp_max}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
      ))}
    </div>
  );
}
