import React from "react";
import "../styles.css";

function About() {
  return (
    <>
      <div className="c1">
        <h1>About Us</h1>
      </div>

      <div className="c2">
        <div className="text">
          <h1>Introducing Creative Learning</h1>
          <p>
            Learnova is your personalized e-learning platform designed to make
            learning simple, engaging, and accessible. Whether you're brushing
            up skills or diving into something new, Learnova brings interactive
            lessons, progress tracking, and expert-curated content—all in one
            place. Learn smarter, grow faster!
          </p>
        </div>
        <div className="photo">
          <img
            src="./about.png"
            alt="Creative Learning Illustration"
          />
        </div>
      </div>

      <div className="c3">
        <div className="strength">
          <div className="s1">
            <div className="s1-a">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#EAC100" className="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            </div>
            <div className="s1-b">
              <p>1800+ Students</p>
            </div>
          </div>

          <div className="s1">
            <div className="s1-a">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#EAC100" className="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
              </svg>
            </div>
            <div className="s1-b">
              <p>1800+ Courses</p>
            </div>
          </div>

          <div className="s1">
            <div className="s1-a">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#EAC100" className="bi bi-person-workspace" viewBox="0 0 16 16">
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
              </svg>
            </div>
            <div className="s1-b">
              <p>1800+ Teachers</p>
            </div>
          </div>

          <div className="s1">
            <div className="s1-a">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#EAC100" className="bi bi-award" viewBox="0 0 16 16">
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
              </svg>
            </div>
            <div className="s1-b">
              <p>1800+ Awards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="c4">
        <h1>Our Teachers</h1>
        <p>
          If you are going to use a passage of you need to be sure there isn't
          anything embarrassing hidden in the middle of text
        </p>
        <div className="teachers">
          <div className="t1">
            <img src="./hod.png" alt="Aden Smith" />
            <h3>Aden Smith</h3>
            <p>Head of Department</p>
          </div>
          <div className="t1">
            <img src="./prof(1).png" alt="Maggie Lee" />
            <h3>Maggie Lee</h3>
            <p>Professor</p>
          </div>
          <div className="t1">
            <img src="./ap.png" alt="David Fierro" />
            <h3>David Fierro</h3>
            <p>Assistant Professor</p>
          </div>
          <div className="t1">
            <img src="./prof(2).png" alt="Michael Adam" />
            <h3>Michael Adam</h3>
            <p>Professor</p>
          </div>
          <div className="t1">
            <img src="./prof(3).png" alt="Kylian Chen" />
            <h3>Kylian Chen</h3>
            <p>Professor</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
