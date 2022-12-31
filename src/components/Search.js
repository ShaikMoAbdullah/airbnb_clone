import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData: "",
            filteredData: [],
        };
    }

    setWord = (event) => {
        this.setState({
            inputData: event.target.value,
        });
    };

    handleFilter = (event) => {
        this.setWord(event);
        const newFilterData = this.props.data.filter((cityData) => {
            return cityData.city
                .toLowerCase()
                .includes(this.state.inputData.toLowerCase());
        });
        if (this.state.inputData === "") {
            this.setState({
                filteredData: [],
            });
        } else {
            this.setState({
                filteredData: newFilterData,
            });
        }
    };

    clearInput = () => {
        this.setState({
            inputData: "",
            filteredData: [],
        });
    };

    render() {
        const { filteredData, inputData } = this.state;
        return (
            <div className="search">
                <div className="search-bar d-flex align-items-center rounded-pill">
                    <input
                        type="text"
                        value={inputData}
                        className="search-bar-text border-0"
                        placeholder="Start you search"
                        onChange={this.handleFilter}
                    />
                    {inputData.length === 0 ? (
                        <button className="search-icon d-flex justify-content-center align-items-center text-white rounded-circle">
                            <i className="fas fa-search"></i>
                        </button>
                    ) : (
                        <button className="search-icon d-flex justify-content-center align-items-center text-white rounded-circle">
                            <i
                                className="fas fa-times-circle"
                                id="clear-button"
                                onClick={this.clearInput}
                            ></i>
                        </button>
                    )}
                </div>
                {filteredData.length !== 0 && (
                    <div className="result text-black position-absolute bg-white">
                        {filteredData.slice(0, 3).map((data) => {
                            return (
                                <Link
                                    to={`/hotels/${data.id}`}
                                    className="dataItem"
                                >
                                    <p className="city-name text-black">
                                        {data.city}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}
