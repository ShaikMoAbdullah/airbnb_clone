import React, { Component } from "react";
import Home from "./components/Home";
import Hotels from "./components/Hotels";
import Footer from "./components/Footer";
import AllHotels from "./components/AllHotels";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookHotel from "./components/BookHotel";
import cityData from "./components/jsonFiles/sampleCity.json";
import hotelData from "./components/jsonFiles/sampleHotel.json";
import bookingData from "./components/jsonFiles/sampleBooking.json";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotelData,
            bookingData,
        };
    }

    changeStatus = (hotelId) => {
        console.log("clicked");
        const hotelData = this.state.hotelData;
        const bookingData = this.state.bookingData;
        const modifiedHotelData = hotelData.map((data) => {
            if (data.id === Number(hotelId)) {
                console.log(data.id, hotelId);
                const currentStatus = data.hotel_status;
                data.hotel_status = !currentStatus;
            }
            return data;
        });
        const modifiedBookingData = bookingData.map((data) => {
            if (data.id === Number(hotelId)) {
                console.log(data.id, hotelId);
                const currentStatus = data.booking_status;
                data.booking_status = !currentStatus;
            }
            return data;
        });
        this.setState({
            hotelData: modifiedHotelData,
            bookingData: modifiedBookingData,
        });
    };

    render() {
        return (
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home data={cityData} />} />

                    <Route
                        exact
                        path="/hotels"
                        element={
                            <AllHotels
                                cityData={cityData}
                                hotelData={this.state.hotelData}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/hotels/:id"
                        element={
                            <Hotels
                                cityData={cityData}
                                hotelData={this.state.hotelData}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/booking/:id"
                        element={
                            <BookHotel
                                cityData={cityData}
                                bookingData={this.state.bookingData}
                                hotel_Status={(hotelId) => {
                                    this.changeStatus(hotelId);
                                }}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </div>
        );
    }
}
