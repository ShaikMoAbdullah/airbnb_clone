import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo1.png";
import SearchHotel from "./SearchHotel";
import Dates from "./Dates";

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            terms: false,
        };
    }

    toggleDate = () => {
        this.setState({
            terms: !this.state.terms,
        });
    };

    render() {
        const { cityData, hotelData } = this.props;

        return (
            <div className="nav-hotel top-0 position-sticky bg-white">
                <div className="navigation-hotel d-flex justify-content-between align-items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo-image"></img>
                    </Link>
                    <SearchHotel data={cityData} />
                    <div className="account d-flex justify-content-around align-items-center">
                        <p className="host">Become a host</p>
                        <i class="fas fa-globe"></i>
                        <div className="profile d-flex justify-content-between align-items-center border border-dark rounded rounded-pill p-3">
                            <i class="fas fa-bars"></i>
                            <i class="fas fa-user-circle photo"></i>
                        </div>
                    </div>
                </div>
                <div className="filters d-flex justify-content-evenly mt-3">
                    <button
                        className="btn button-hotel rounded-pill"
                        onClick={this.sort}
                    >
                        Price <i class="fas fa-chevron-down filter-icon"></i>
                    </button>
                    <button
                        className="btn button-hotel rounded-pill"
                        onClick={this.toggleDate}
                    >
                        Date <i class="fas fa-chevron-down filter-icon"></i>
                    </button>
                    {this.state.terms && <Dates />}

                    <button className="btn rounded-pill button-hotel">
                        Free cancellation
                    </button>
                    <button className="btn rounded-pill button-hotel">
                        Beachfront
                    </button>
                    <button className="btn rounded-pill button-hotel">
                        Pool
                    </button>
                    <button className="btn rounded-pill button-hotel">
                        Wifi
                    </button>
                    <button className="btn rounded-pill button-hotel">
                        Air conditioning
                    </button>
                    <button className="btn rounded-pill button-hotel">
                        Kitchen
                    </button>
                    <button className="btn rounded-pill button-hotel">
                        Free Parking
                    </button>
                    <button className="btn rounded-pill button-hotel">
                        Washing Machine
                    </button>
                    <button className="btn rounded-pill button-hotel">
                        <i class="fas fa-sliders-h filter-icon"></i> Filters
                    </button>
                </div>
                <hr className="hotel-hr" />
            </div>
        );
    }
}
