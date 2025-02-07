import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = () => {
  const [articles, setArticlies] = useState([])

  useEffect(() => {
    let url = ` https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_API_KEY
    }`

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticlies(data.articles))
  }, [])
  return (
    <>
      <h2 className="text-center mt-2">
        Lates <span className="badge bg-danger text-light  fs-4"> News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        )
      })}
    </>
  )
}

export default NewsBoard
