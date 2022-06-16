import "./App.css";
import Navbar from "./components/Navbar";
import contriesArr from "./countries.json";
import {useState} from "react";
import CountriesList from "./components/CountriesList";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

function App() {
const [country, setCountry] = useState();

  return (
<div>
<div className="App"></div>;
  <Navbar/>
  
  <CountriesList country ={country} />


<Routes>
<Route path="/alpha3Code" element={ <CountryDetails country ={country} /> } />
</Routes>

</div>
  
  );
}
export default App;