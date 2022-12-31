import React, { Component } from "react";
import Nav from "./Nav";
import BookHotelInfo from "./BookHotelInfo";

export default class BookHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelId: "",
        };
    }

    setHotel = () => {
        const path = window.location.pathname.split("/");
        this.setState({
            hotelId: path[path.length - 1],
        });
    };

    componentDidMount = () => {
        this.setHotel();
    };

    render() {
        const { cityData, bookingData } = this.props;
        const { hotelId } = this.state;
        return (
            <div>
                <Nav data={cityData} />
                <BookHotelInfo
                    hotelId={hotelId}
                    bookingData={bookingData}
                    hotel_Status={this.props.hotel_Status}
                />
            </div>
        );
    }
}
