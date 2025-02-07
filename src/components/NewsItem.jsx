import React from "react"
import importimg from "../assets/news.jpg"
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
          src={src ? src : importimg}
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
          <div
            style={{
              position: "relative", // Relative positioning to control the "Read More" button
              paddingBottom: "40px", // Space for the button at the bottom
            }}
          >
            <p className="card-text">
              {description ? description.slice(0, 90) : "News"}
            </p>

            {/* The "Read More" button is positioned absolutely relative to the description */}
            <a
              href={url}
              className="btn btn-primary mb-3"
              target="_blank"
              style={{
                position: "absolute", // Position the button absolutely within the wrapper
                bottom: "-3px", // Stick the button to the bottom of the description
                left: "50%", // Center horizontally
                transform: "translateX(-50%)", // Fix centering offset
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsItem
