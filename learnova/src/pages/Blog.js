import React from "react";
import "../styles.css";

function Blog() {
  return (
    <>
      <div className="c1">
        <h1>Our Blog</h1>
      </div>
      <div className="a1">
        <div className="blog">
          {[...Array(7)].map((_, i) => (
            <div className="x" key={i}>
              <img
                src="./How-Artificial-Intelligence-is-Transforming-the-Learning-Technology-Landscape_resized.jpg"
                alt="AI Blog"
              />
              <h2>AI Training</h2>
              <p>Registration open</p>
              <div className="btn">
                <button>01 June 2025</button>
                <button>Comments</button>
              </div>
            </div>
          ))}
        </div>
        <button id="view">View More</button>
      </div>
    </>
  );
}

export default Blog;
