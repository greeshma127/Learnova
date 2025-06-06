import React from "react";
import "../styles.css"

function Prices(){
    return(
        <>
            <div class="container-3">
        <div class="prices">
            <div class="box-1">
                <div class="head-1">
                    <h2>Basic</h2>
                </div>
                <div class="sub">
                    <h2>$99/Month</h2>
                </div>
                <div class="body">
                    <p>Unlimited Course Access</p>
                </div>
                <button id="b1" href="#">Select Plan</button>
            </div>
            <div class="box-1">
                <div class="head-2">
                    <h2>Standard</h2>
                </div>
                <div class="sub">
                    <h2>$120/Month</h2>
                </div>
                <div class="body">
                    <p>Unlimited Course Access</p>
                    <p>High Resolution Videos</p>
                </div>
                <button id="b2" href="#">Select Plan</button>
            </div>
            <div class="box-1">
                <div class="head-3">
                    <h2>Premium</h2>
                </div>
                <div class="sub">
                    <h2>$199/Month</h2>
                </div>
                <div class="body">
                    <p>Unlimited Course Access</p>
                    <p>High Resolution Videos</p>
                    <p>Certificate of Completion</p>
                </div>
                <button id="b3" href="#">Select Plan</button>
            </div>
        </div>
    </div>
        </>
    )
}

export default Prices;