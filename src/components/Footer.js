import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer d-flex flex-column flex-wrap">
                <div className="row-footer d-flex justify-content-evenly flex-wrap">
                    <ul>
                        <li className="bold">Support</li>
                        <li className="list-a">Help Centre</li>
                        <li className="list-a">Safety information</li>
                        <li className="list-a">Cancellation options</li>
                        <li className="list-a">Our COVID-19 Response</li>
                        <li className="list-a">
                            Supporting people with disabilities
                        </li>
                        <li className="list-a">
                            Report a neighbourhood concern
                        </li>
                    </ul>
                    <ul>
                        <li className="bold">Community</li>
                        <li className="list-a">
                            Airbnb.org: disaster relief housing
                        </li>
                        <li className="list-a">Support Afghan refugees</li>
                        <li className="list-a">
                            Celebrating diversity and belonging
                        </li>
                        <li className="list-a">Combating discrimination</li>
                    </ul>
                    <ul>
                        <li className="bold">Hosting</li>
                        <li className="list-a">Try hosting</li>
                        <li className="list-a">
                            AirCover: protection for Hosts
                        </li>
                        <li className="list-a">Explore hosting resources</li>
                        <li className="list-a">Visit our community forum</li>
                        <li className="list-a">How to host responsibly</li>
                    </ul>
                    <ul>
                        <li className="bold">About</li>
                        <li className="list-a">Newsroom</li>
                        <li className="list-a">Learn about new features</li>
                        <li className="list-a">Letter from our founders</li>
                        <li className="list-a">Careers</li>
                        <li className="list-a">Investors</li>
                        <li className="list-a">Airbnb Luxe</li>
                    </ul>
                </div>
                <hr className="m-auto footer-hr" />
                <div className="footer-base d-flex justify-content-between flex-wrap m-auto">
                    <ul className="terms d-flex justify-content-evenly align-items-center flex-wrap">
                        <i class="far fa-copyright copy"></i>
                        <li className="list-b">2022 Airbnb, Inc.</li>
                        <li className="list-b">Privacy</li>
                        <li className="list-b">Terms</li>
                        <li className="list-b">Sitemap</li>
                        <li className="list-b">Company Details</li>
                    </ul>
                    <ul className="language d-flex justify-content-between align-items-center flex-wrap">
                        <i class="fas fa-globe"></i>
                        <li className="list-b-1 english">English (IN)</li>
                        <i class="fas fa-rupee-sign"></i>
                        <li className="list-b-1 inr">INR</li>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </ul>
                </div>
            </div>
        );
    }
}
