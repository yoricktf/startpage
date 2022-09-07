import { React, useState, useEffect } from 'react'

const Time = () => {
  const [time, setTime] = useState(new Date())

  function refreshClock() {
    setTime(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <h1>{time.toLocaleTimeString('de-DE')}</h1>
    </>
  )
}

export default Time
