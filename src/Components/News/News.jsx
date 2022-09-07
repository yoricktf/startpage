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
    <div>
      <h1>News</h1>
      {articles.map(article => {
        return (
          <div>
            <a href={article.data.url}>
              <h4>{article.data.title}</h4>
              <h6>{article.data.domain}</h6>
            </a>
          </div>
        )
      })}
    </div>

  )
}

export default News
