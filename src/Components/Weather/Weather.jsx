import React, { useEffect, useState } from "react";


const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  // const [lat, setLat] = useState([52.520008]);
  // const [long, setLong] = useState([13.404954]);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);




  return (
    <div>weather</div>
  )
}

export default Weather
