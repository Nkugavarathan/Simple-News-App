import React, { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
function App() {
  /*
  https://newsapi.org/docs/endpoints/top-headlines
  category
The category you want to get headlines for. Possible options: businessentertainmentgeneralhealthsciencesportstechnology. Note: you can't mix this param with the sources param.
  */
  const [category, setCategory] = useState("general")
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  )
}

export default App
