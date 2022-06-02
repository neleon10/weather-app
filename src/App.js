import React from "react";
import Cards from "./components/Cards.jsx";
import Nav from './components/Nav.jsx';
//import data from "./data.js";

function App() {
  
  const [cities,setCities] = React.useState([]); 

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  
  /*Funcion agregar ciudades*/
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(prevState => [...prevState, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }
    function onClose(id){
      setCities((cities)=> cities.filter((element)=> element.id !== id));
    }


  return (
    <div>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards cities={cities} onClose={onClose}/>
      </div>
    </div>
  );
}

export default App;
