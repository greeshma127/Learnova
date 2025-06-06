import React from "react";
import "../styles.css"

function Courses() {
  return (
    <>
      <div className="c1">
        <h1>All Courses</h1>
      </div>
      <div className="container-2">
        <div className="courses">
          {[...Array(8)].map((_, i) => (
            <div className="box" key={i}>
              <img src="./img1.png" alt="Course" />
              <h3>Data Product Manager</h3>
              <p>
                Follow the step by step process to learn data and gain
                understandability of software-based products in depth.
              </p>
              <div className="align">
                <p>Instructor: Alia</p>
                <div className="price">Free</div>
              </div>
            </div>
          ))}
        </div>
        <button id="view1">View More</button>
      </div>
    </>
  );
}

export default Courses;
