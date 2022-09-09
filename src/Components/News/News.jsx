import React, { useEffect, useState } from "react";
import './News.css';
import Weather from '../Weather/Weather';

const News = () => {
  const [seconds, setSeconds] = useState(0)
  const [articles, setArticles] = useState([{ data: { title: '', domain: '', url: '', id: '' } }]);


  useEffect(() => {
    fetch('https://www.reddit.com/r/worldnews/.json').then(res => {
      res.json().then(data => {
        setArticles(data.data.children);
      })
    })
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(second => (second === articles.length ? 0 : second + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="newsAndWeather">
      <div className="newsTicker">
        <a key={articles[seconds].data.id} href={articles[seconds].data.url}>
          <h4>{articles[seconds].data.title}</h4>
          <h6>{articles[seconds].data.domain}</h6>
        </a>
      </div>
      <Weather />
    </div>

  )
}

export default News
