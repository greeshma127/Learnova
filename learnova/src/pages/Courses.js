import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";


const coursesData = [
  {
    image: "/course (6).png",
    title: "Data Product Manager",
    description:
      "Follow the step by step process to learn data and gain understandability of software-based products in depth.",
    instructor: "Alia",
    price: "Free",
  },
  {
    image: "/course (1).png",
    title: "Full Stack Web Developer",
    description:
      "Master frontend and backend technologies to build complete web applications.",
    instructor: "David",
    price: "₹1999",
  },
  {
    image: "/course (2).png",
    title: "AI for Beginners",
    description:
      "Understand the basics of Artificial Intelligence and its real-world applications.",
    instructor: "Sarah",
    price: "Free",
  },
  {
    image: "/course (3).png",
    title: "UI/UX Design",
    description:
      "Learn user interface and experience design with hands-on projects.",
    instructor: "Nina",
    price: "₹999",
  },
  {
    image: "/course (4).png",
    title: "Cybersecurity Essentials",
    description:
      "Protect systems and networks with beginner-friendly cybersecurity knowledge.",
    instructor: "John",
    price: "Free",
  },
  {
    image: "/course (5).png",
    title: "Cloud Computing Basics",
    description:
      "Get introduced to cloud infrastructure and services like AWS, Azure, and GCP.",
    instructor: "Emma",
    price: "₹1499",
  },
];

function Courses() {
  return (
    <>
      <div className="c1">
        <h1>All Courses</h1>
      </div>
      <div className="container-2">
        <div className="courses">
          {coursesData.map((course, i) => (
            <Link to={`/course/${i}`} key={i} className="box-link">
              <div className="box">
                <img src={course.image} alt={course.title} />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="align">
                  <p>Instructor: {course.instructor}</p>
                  <div className="price">{course.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button id="view1">View More</button>
      </div>
    </>
  );
}

export default Courses;

export { coursesData };
