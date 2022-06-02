import React from "react";
import Cards from "./components/Cards.jsx";
import Nav from './components/Nav.jsx';
import data from "./data.js";


function App() {
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <div>
        <Cards cities={data} />
      </div>
      

    </div>
  );
}

export default App;
