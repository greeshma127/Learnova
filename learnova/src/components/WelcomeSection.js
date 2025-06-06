import React from "react";

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
            src="/vecteezy_online-education-concept-illustration-digital-classroom_10869731.png"
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
          {[...Array(6)].map((_, i) => (
            <div className="box" key={i}>
              <img src="/img1.png" alt="Course" />
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
