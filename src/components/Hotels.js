import React, { Component } from "react";
import NavHotel from "./NavHotel";
import HotelInfo from "./HotelInfo";

export default class Hotels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: "",
        };
    }

    setCity = () => {
        const path = window.location.pathname.split("/");
        this.setState({
            cityId: path[path.length - 1],
        });
    };

    componentDidMount = () => {
        this.setCity();
    };

    render() {
        const { cityData, hotelData } = this.props;
        const { cityId } = this.state;
        return (
            <div className="hotels">
                <NavHotel cityData={cityData} hotelData={hotelData} />
                <HotelInfo cityId={cityId} hotelData={hotelData} />
            </div>
        );
    }
}
