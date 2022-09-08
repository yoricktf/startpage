import React, { useEffect, useState } from "react";

const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(lat, long);
      });

      await fetch(`${process.env.REACT_APP_API_URL}lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          console.log(result)
          setData(result)
        });
    }
    fetchData();
  }, [lat, long])

  console.log(data)

  return (
    <div>
      <h5>{data.main.temp_max}℃</h5>
      <h3>{data.main.temp}℃</h3>
      <h5>{data.main.temp_min}℃</h5>
    </div>
  )
}

export default Weather
