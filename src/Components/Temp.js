import React, { useState, useEffect } from "react";
import "./css/style.css";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchApi = async () => {
       const url =  `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=695b239b4a2a26988fb337f64863e1d7`
       const response = await fetch(url);
       const res = await response.json();
      //  console.log(res);
       setCity(res.main);
    }
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max"> Min : {city.temp_min}°C | Max : {city.temp_max}°C </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default Temp;
