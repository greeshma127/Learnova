import React from "react";
import "../styles.css";

const ongoingCourses = [
  {
    image: "./course (6).png",
    title: "Data Product Manager",
    progress: 60, // in percent
  },
  {
    image: "./course (2).png",
    title: "AI for Beginners",
    progress: 85,
  },
];

function Profile(){
    return(
        <>
            <div className="c1">
        <h1>Your Profile</h1>
    </div>
    <div className="f">
      <h2>Ongoing Courses</h2>
      <div className="f1">
        {ongoingCourses.map((course, index) => (
          <div className="f2" key={index}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p>{course.progress}% Completed</p>
          </div>
        ))}
      </div>
    </div>
    <div className="f">
        <h2>Completed Courses</h2>
        <div className="f1">
            <div className="f2">
                <img src="./course (1).png" alt="Text"/>
                <h3>Full Stack Web Developer</h3>
            </div>
            <div className="f2">
                <img src="./course (3).png" alt="Text"/>
                <h3>UI/UX Design</h3>
            </div>
        </div>
    </div>
        </>
    )
}

export default Profile;