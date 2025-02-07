import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = () => {
  const [articles, setArticlies] = useState([])
  console.log(import.meta.env.VITE_API_KEY)
  // useEffect(() => {
  //   let url = ` https://newsapi.org/v2/top-headlines?country=us&apiKey=${
  //     import.meta.env.VITE_API_KEY
  //   }`

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setArticlies(data.articles))

  // }, [])
  useEffect(() => {
    const fetchNews = async () => {
      try {
        let apiKey = import.meta.env.VITE_API_KEY
        console.log("Using API Key:", apiKey) // Debugging check

        if (!apiKey) {
          throw new Error("API key is missing! Check .env file.")
        }

        let url = `https://cors-anywhere.herokuapp.com https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        let response = await fetch(url)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        let data = await response.json()
        setArticlies(data.articles || []) // Avoid undefined issues
      } catch (error) {
        console.error("Error fetching news:", error.message)
        setArticlies([]) // Prevent crash
      }
    }

    fetchNews()
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
