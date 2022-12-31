import React, { Component } from "react";
import section1image from "./images/section1.jpg";
import { Link } from "react-router-dom";

export default class Section1 extends Component {
    render() {
        return (
            <div className="section1 position-relative bg-black">
                <img
                    src={section1image}
                    alt="section1"
                    className="section1-image"
                ></img>
                <p className="section1-text position-absolute text-white">
                    Not sure where to go? Perfect.
                </p>
                <Link to="/hotels">
                    <button className="section1-button position-absolute bg-white">
                        {" "}
                        I'm flexible
                    </button>
                </Link>
            </div>
        );
    }
}
