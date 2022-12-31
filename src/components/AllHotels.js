import React, { Component } from "react";
import NavHotel from "./NavHotel";
import AllHotelInfo from "./AllHotelInfo";

export default class AllHotels extends Component {
    render() {
        const { cityData, hotelData } = this.props;
        return (
            <div className="hotels">
                <NavHotel cityData={cityData} />
                <AllHotelInfo hotelData={hotelData} />
            </div>
        );
    }
}
