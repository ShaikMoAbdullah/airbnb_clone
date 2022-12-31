import React, { Component } from "react";

export default class BookHotelInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            terms: false,
        };
    }

    toggleTerms = (hotelId) => {
        this.props.hotel_Status(hotelId);
        this.setState({
            terms: !this.state.terms,
        });
    };

    render() {
        const { hotelId, bookingData } = this.props;
        return (
            <div className="bookings">
                {bookingData
                    .filter((data) => data.property === Number(hotelId))
                    .map((data) => {
                        return (
                            <div className="hotel-data d-flex m-auto position-relative">
                                <img
                                    src={data.image}
                                    alt="hotel"
                                    className="hotel-image"
                                />
                                <div className="hotel-details d-flex flex-column position-relative">
                                    <p className="hotel-name">
                                        {data.name} is hosted by{" "}
                                        {data.hosted_by_name}
                                    </p>
                                    <p className="hotel-address">
                                        {data.address}
                                    </p>
                                    <img
                                        src={data.hosted_by_photo}
                                        className="book-profile position-absolute"
                                    />
                                    <hr className="feature-hor" />
                                    <div className="features d-flex justify-content-between">
                                        {data.features.map((feature) => {
                                            return (
                                                <p className="hotel-feature d-flex">
                                                    {feature}
                                                </p>
                                            );
                                        })}
                                    </div>
                                    <div className="fare-rating d-flex justify-content-between position-absolute">
                                        <div className="rate d-flex">
                                            <i class="fas fa-star star"></i>
                                            <p className="rating">
                                                <span className="review">
                                                    {data.rating}{" "}
                                                </span>
                                                ({data.review_count} reviews)
                                            </p>
                                        </div>
                                        <div className="price d-flex">
                                            <i class="fas fa-rupee-sign rupee"></i>
                                            <p className="pricing">
                                                <span className="number">
                                                    {data.price}{" "}
                                                </span>
                                                / night
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                {/* <button
                    className="book-button"
                    onClick={() => {
                        this.props.hotel_Status(hotelId);
                    }}
                >
                    Reserve
                </button> */}
                {this.state.terms ? (
                    <button
                        className="book-button-1"
                        onClick={() => {
                            this.toggleTerms(hotelId);
                        }}
                    >
                        Reserved
                    </button>
                ) : (
                    <button
                        className="book-button"
                        onClick={() => {
                            this.toggleTerms(hotelId);
                        }}
                    >
                        Reserve
                    </button>
                )}
            </div>
        );
    }
}
