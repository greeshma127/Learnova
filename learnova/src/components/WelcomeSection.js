import React from "react";

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

function WelcomeSection() {
  return (
    <>
      <div className="container">
        <div className="text">
          <h1>
            Start Learning New Skills for a <span>Better Future</span>
          </h1>
          <p>
            With the help of E-Learning, create your own path and drive on your
            skills on your own to achieve what you seek.
          </p>
          <button>View All Courses</button>
        </div>
        <div className="photo">
          <img
            src="/welcome.png"
            alt="Online Education"
          />
        </div>
      </div>

      <div className="container-2">
        <h1>Discover The Variety of Courses Here</h1>
        <p>
          Choose one appropriate course for you from over multifarious courses
          available on this platform.
        </p>
        
        <div className="courses">
      {coursesData.map((course, i) => (
        <div className="box" key={i}>
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <div className="align">
            <p>Instructor: {course.instructor}</p>
            <div className="price">{course.price}</div>
          </div>
        </div>
      ))}
    </div>
      </div>

      <div className="container-3">
        <h1>Pricing</h1>
        <div className="prices">
          <div className="box-1">
            <div className="head-1">
              <h2>Basic</h2>
            </div>
            <div className="sub">
              <h2>$99/Month</h2>
            </div>
            <div className="body">
              <p>Unlimited Course Access</p>
            </div>
            <button id="b1">Select Plan</button>
          </div>

          <div className="box-1">
            <div className="head-2">
              <h2>Standard</h2>
            </div>
            <div className="sub">
              <h2>$120/Month</h2>
            </div>
            <div className="body">
              <p>Unlimited Course Access</p>
              <p>High Resolution Videos</p>
            </div>
            <button id="b2">Select Plan</button>
          </div>

          <div className="box-1">
            <div className="head-3">
              <h2>Premium</h2>
            </div>
            <div className="sub">
              <h2>$199/Month</h2>
            </div>
            <div className="body">
              <p>Unlimited Course Access</p>
              <p>High Resolution Videos</p>
              <p>Certificate of Completion</p>
            </div>
            <button id="b3">Select Plan</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeSection;
