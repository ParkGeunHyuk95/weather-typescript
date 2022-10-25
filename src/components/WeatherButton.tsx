import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface buttonProps{
  city:string;
  cities:string[];
  setCity: React.Dispatch<React.SetStateAction<string>>
  getCurrentLocation: ()=>void
}
const WeatherButton = ({ cities, city, setCity, getCurrentLocation }:buttonProps) => {
  return (
    <div id="WeatherButton" className="menu-container" >
      <Button 
      variant="warning"
      onClick={()=>{
        getCurrentLocation()
      }}
      >
        Current Location</Button>
      {cities.map((item) => (
        <Button
          variant="warning"
          onClick={() => {
            setCity(item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;