import { React, useState, useEffect } from 'react'
import './Time.css'

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
    <div className='DateAndTime'>
      <h3>{time.toDateString('de-DE')}</h3>
      <h3>{time.toLocaleTimeString('de-DE')}</h3>
    </div>
  )
}

export default Time
