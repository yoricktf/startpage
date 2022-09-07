import React, { useEffect, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/worldnews/.json').then(res => {
      res.json().then(data => {
        setArticles(data.data.children);
      })
    })
  }, []);

  console.log(articles);

  return (
    <div>News</div>
  )
}

export default News
