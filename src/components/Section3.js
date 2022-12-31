import React, { Component } from "react";
import hills from "./images/section3-1.jpg";
import clothes from "./images/section3-2.jpg";

export default class Section3 extends Component {
    render() {
        return (
            <div className="section3">
                <h1 className="section3-heading-text">
                    Discover Airbnb Experiences
                </h1>
                <div className="section3-boxes d-flex flex-wrap justify-content-between m-auto">
                    <div className="section3-left-box position-relative">
                        <img src={hills} className="section3-image"></img>
                        <h1 className="section3-text position-absolute text-white">
                            Things to do on your trip
                        </h1>
                        <button className="section3-button position-absolute text-black bg-white">
                            Experiences
                        </button>
                    </div>
                    <div className="section3-right-box position-relative">
                        <img src={clothes} className="section3-image"></img>
                        <h1 className="section3-text position-absolute text-white">
                            Things to do from home
                        </h1>
                        <button className="section3-button position-absolute text-black bg-white section3-button-1">
                            Online Experiences
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
