import React, { Component } from "react";
import Nav from "./Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import "../App.css";

export default class App extends Component {
    render() {
        return (
            <div className="main-container">
                <Nav data={this.props.data} />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>
        );
    }
}
