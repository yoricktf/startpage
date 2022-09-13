import React, { useEffect, useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [icon, setIcon] = useState()
  const [temp, setTemp] = useState(21)
  const [maxTemp, setMaxTemp] = useState()
  const [minTemp, setMinTemp] = useState()

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          // setTemp(result.main.temp)
          setMaxTemp(result.main.temp_max)
          setMinTemp(result.main.temp_min)
          setIcon(result.weather[0].icon)
        });
    }
    fetchData();
  }, [lat, long])

  useEffect(() => {
    if (temp < 10) {
      document.getElementById('tempIndicator').style.cssText = "background: linear-gradient(45deg, #424242 10%, #00158d) ;"
    } else if (temp < 20) {
      document.getElementById('tempIndicator').style.cssText = "background: linear-gradient(45deg, #00158d 20%, #006803) ;"
    } else if (temp < 30) {
      document.getElementById('tempIndicator').style.cssText = "background: linear-gradient(45deg, #006803 20%, #cd6b10) ;"
    } else if (temp > 30) {
      document.getElementById('tempIndicator').style.cssText = "background: linear-gradient(45deg, #cd6b10 20%, #ff0000) ;"
    }
  }, [temp])

  return (
    <div className='weather'>
      <img src={`${process.env.REACT_APP_ICON_URL}${icon}.png`} alt="" />
      <div className="temperatures">
        <h6 className="temperatureRange">{maxTemp}℃</h6>
        <h3>{temp}℃</h3>
        <h6 className="temperatureRange">{minTemp}℃</h6>
      </div>
    </div>
  )
}

export default Weather
