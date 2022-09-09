import React, { useEffect, useState } from "react";

const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState({});
  const [icon, setIcon] = useState()
  const [temp, setTemp] = useState()
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
          setData(result)
          setTemp(result.main.temp)
          setMaxTemp(result.main.temp_max)
          setMinTemp(result.main.temp_min)
          setIcon(result.weather[0].icon)
        });
    }
    fetchData();
  }, [lat, long])

  return (
    <div>
      <img src={`${process.env.REACT_APP_ICON_URL}${icon}@2x.png`} alt="" />
      <h5>{maxTemp}℃</h5>
      <h3>{temp}℃</h3>
      <h5>{minTemp}℃</h5>
    </div>
  )
}

export default Weather
