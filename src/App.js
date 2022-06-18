import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Ciudad from "./components/Ciudad.jsx";

//import data from "./data.js";

function App() {
  const [cities, setCities] = React.useState([]);
   
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  /*Funcion agregar ciudades*/
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((recurso) => {
        if (cities.find((el) => el.name === recurso.name)) {
          alert("The city is in front of you!");
          return;
        }
        if (recurso !== undefined) {

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
            longitud: recurso.coord.lon,
          };

          setCities((prevState) => [...prevState, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  //close the card. 
  function onClose(id) {
    setCities((cities) => cities.filter((element) => element.id !== id));
  }

    

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Cards cities={cities} onClose={onClose} />} />
        <Route path="/ciudad/:id" element={ <Ciudad cities={cities} />} />
      </Routes>
    </div>
  );
}

export default App;
