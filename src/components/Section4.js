import React, { Component } from "react";
import garden from "./images/section4.jpg";

export default class Section4 extends Component {
    render() {
        return (
            <div className="section4 position-relative">
                <img src={garden} className="garden-image"></img>
                <h1 className="section4-text position-absolute text-white">
                    Questions about hosting?
                </h1>
                <button className="section4-button position-absolute text-black bg-white">
                    Ask a Superhost
                </button>
            </div>
        );
    }
}
