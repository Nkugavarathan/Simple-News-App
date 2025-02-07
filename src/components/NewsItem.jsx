import React from "react"

const NewsItem = ({ title, description, src, url }) => {
  return (
    <>
      <div
        className="card bg-dark text-light m-3 px-2 py-2 d-inline-block "
        style={{
          width: "345px",
          height: "400px",
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          className="card-img-top"
          alt="news-thumbnail"
          style={{
            width: "100%",
            height: "200px", // Fixed height
            objectFit: "cover", // Ensures the image fills the space properly
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description ? description.slice(0, 90) : "News"}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  )
}

export default NewsItem
