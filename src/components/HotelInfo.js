import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HotelInfo extends Component {
    render() {
        const { hotelData, cityId } = this.props;
        return (
            <div className="hotel-information d-flex flex-column">
                <div className="hotel-overview-data">
                    <p>300+ stays in Bengaluru</p>
                    <p>
                        <i class="fas fa-trophy count"></i>
                        More than 30,000 guests have stayed in Bengaluru. On
                        average they rated their stays 4.7 out of 5 stars.
                    </p>
                    <hr className="overview-line m-auto" />
                </div>
                {hotelData.filter((data) => Number(cityId) === data.location).map((data) => {
                        return (
                            <Link
                                to={`/booking/${data.id}`}
                                className="hotel-data d-flex m-auto position-relative"
                            >
                                <img
                                    src={data.image}
                                    alt="hotel"
                                    className="hotel-image"
                                />
                                <div className="hotel-details d-flex flex-column position-relative">
                                    <p className="hotel-name">{data.name}</p>
                                    <p className="hotel-address">
                                        {data.address}
                                    </p>
                                    <i class="far fa-heart position-absolute heart"></i>
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
                            </Link>
                        );
                })}
            </div>
        );
    }
}
