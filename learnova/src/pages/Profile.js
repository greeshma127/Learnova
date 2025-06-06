import React from "react";
import "../styles.css";

function Profile(){
    return(
        <>
            <div className="c1">
        <h1>Your Profile</h1>
    </div>
    <div className="f">
        <h2>Ongoing Courses</h2>
        <div className="f1">
            <div className="f2">
                <img src="./How-Artificial-Intelligence-is-Transforming-the-Learning-Technology-Landscape_resized.jpg" alt="Text"/>
                <h3>AI Training</h3>
            </div>
            <div className="f2">
                <img src="./How-Artificial-Intelligence-is-Transforming-the-Learning-Technology-Landscape_resized.jpg" alt="Text"/>
                <h3>AI Training</h3>
            </div>
        </div>
    </div>
    <div className="f">
        <h2>Completed Courses</h2>
        <div className="f1">
            <div className="f2">
                <img src="./How-Artificial-Intelligence-is-Transforming-the-Learning-Technology-Landscape_resized.jpg" alt="Text"/>
                <h3>AI Training</h3>
            </div>
            <div className="f2">
                <img src="./How-Artificial-Intelligence-is-Transforming-the-Learning-Technology-Landscape_resized.jpg" alt="Text"/>
                <h3>AI Training</h3>
            </div>
        </div>
    </div>
        </>
    )
}

export default Profile;