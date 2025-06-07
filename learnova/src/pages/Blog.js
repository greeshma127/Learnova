import React from "react";
import "../styles.css";

const blogData = [
  {
    image: "/blog (1).jpg",
    title: "AI Training",
    description: "Registration open",
    date: "01 June 2025",
  },
  {
    image: "/blog (2).jpg",
    title: "Web Dev Bootcamp",
    description: "Enroll now to boost your skills!",
    date: "28 May 2025",
  },
  {
    image: "/blog(3).jpg",
    title: "UX Design Basics",
    description: "Learn to create user-friendly designs.",
    date: "25 May 2025",
  },
  {
    image: "/blog (3).jpg",
    title: "Cloud Computing Essentials",
    description: "Free certification included.",
    date: "20 May 2025",
  },
  {
    image: "/blog (1).jpeg",
    title: "Cybersecurity Workshop",
    description: "Protect yourself online.",
    date: "15 May 2025",
  }
];

function Blog() {
  return (
    <>
      <div className="c1">
        <h1>Our Blog</h1>
      </div>
      <div className="a1">
        <div className="blog">
      {blogData.map((blog, i) => (
        <div className="x" key={i}>
          <img src={blog.image} alt={blog.title} />
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <div className="btn">
            <button>{blog.date}</button>
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
