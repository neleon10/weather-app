import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Ciudad from "./components/Ciudad.jsx";


const apiKey = "4ae2636d8dfbdc3044bede63951a019b"
//const key = process.env.APIKEY;

function App() {
  const [cities, setCities] = React.useState([]);

  

  /*Funcion agregar ciudades*/
  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((recurso) => {

        //if the city was not found res returns an error object. 
        if (recurso.cod === "404"){
          alert ('City not found, try again')
          return;
        }

        //checking if the city is not included in the array already.
        if (cities.find((el) => el.name === recurso.name)) {
          alert("City already found!");
          return;
        }
        if (recurso !== undefined) {
          //creating city to add in array
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
          //adding city to state cities. keeping the previous value.
          setCities((prevState) => [...prevState, ciudad]);
        }
      });
  }

  //function that closes the card.
  function onClose(id) {
    setCities((cities) => cities.filter((element) => element.id !== id));
  }

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Cards cities={cities} onClose={onClose} />} />
        <Route path="/ciudad/:id" element={<Ciudad cities={cities} />} />
      </Routes>
    </div>
  );
}

export default App;
