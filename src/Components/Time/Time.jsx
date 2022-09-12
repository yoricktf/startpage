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

    <div className='dateAndTimeComponent'>
      <div className='dateAndTime'>
        <h2>{time.toLocaleTimeString('de-DE')}</h2>
        <h6>{time.toDateString('de-DE')}</h6>
      </div>
    </div>

  )
}

export default Time
