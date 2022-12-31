import React, { Component } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Link } from "react-router-dom";

export default class Dates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            terms: false,
        };
    }

    toggleDate = () => {
        this.setState({
            terms: !this.state.terms,
        });
    };

    handleSelect = (ranges) => {
        this.setState({
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
        });
    };

    render() {
        const selectionRange = {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            key: "selection",
        };
        return (
            <div className="search">
                <div className="search">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={this.handleSelect}
                        className="date-picker"
                    />
                </div>
            </div>
        );
    }
}
