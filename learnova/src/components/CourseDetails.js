import React from "react";
import { useParams } from "react-router-dom";
import { coursesData } from "../pages/Courses";
import "../styles.css";

function CourseDetails() {
  const { id } = useParams();
  const course = coursesData[id];

  if (!course) return <p>Course not found!</p>;

  return (
    <div className="r">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Price:</strong> {course.price}</p>

      <h2>Lesson 1: Introduction</h2>
      <div className="y">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your own video link
          title="Course Tutorial"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <button id="next">Next</button>
    </div>
  );
}

export default CourseDetails;
