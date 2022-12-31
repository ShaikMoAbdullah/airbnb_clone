import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo1.png";
import Search from "./Search";

export default class Nav extends Component {
    render() {
        return (
            <div className="navigation d-flex justify-content-between align-items-center top-0 position-sticky bg-white shadow-sm">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-image"></img>
                </Link>
                <Search data={this.props.data} />
                <div className="account d-flex justify-content-around align-items-center">
                    <p className="host">Become a host</p>
                    <i class="fas fa-globe"></i>
                    <div className="profile d-flex justify-content-between align-items-center border border-dark rounded rounded-pill p-3">
                        <i class="fas fa-bars"></i>
                        <i class="fas fa-user-circle photo"></i>
                    </div>
                </div>
            </div>
        );
    }
}
