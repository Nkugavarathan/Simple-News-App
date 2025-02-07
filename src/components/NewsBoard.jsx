import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let apiKey = import.meta.env.VITE_API_KEY
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
  }, [])

  // another method
  // useEffect(() => {
  //   console.log("API Key:", import.meta.env.VITE_API_KEY)
  //   const fetchNews = async () => {
  //     try {
  //       let apiKey = import.meta.env.VITE_API_KEY
  //       let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  //       let response = await fetch(url)

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`)
  //       }

  //       let data = await response.json()
  //       // console.log(data.articles) // Check the fetched data
  //       setArticles(data.articles || [])
  //     } catch (error) {
  //       // console.error("Error fetching news:", error.message)
  //       setArticles([]) // Avoid crash if error occurs
  //     }
  //   }

  //   fetchNews()
  // }, [])

  return (
    <>
      <h2 className="text-center mt-2">
        Lates <span className="badge bg-danger text-light  fs-4"> News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </>
  )
}

export default NewsBoard
