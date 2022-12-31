import React, { Component } from "react";
import ooty from "./images/ooty.jpg";
import gokarna from "./images/gokarna.jpg";
import madikeri from "./images/madikeri.jpg";
import chikmagalur from "./images/chikmagalur.jpg";

export default class Section2 extends Component {
    render() {
        return (
            <div className="section2">
                <h1 className="section2-text">
                    Inspiration for your next trip
                </h1>
                <div className="section2-boxes d-flex justify-content-around flex-wrap m-auto">
                    <div className="section2-box d-flex flex-column section2-box-1">
                        <img src={gokarna} className="section2-image"></img>
                        <h1 className="section2-box-description text-white">
                            Gokarna
                        </h1>
                        <h4 className="section2-box-description-1 text-white">
                            393 Kilometres away
                        </h4>
                    </div>
                    <div className="section2-box section2-box-2">
                        <img src={madikeri} className="section2-image"></img>
                        <h1 className="section2-box-description text-white">
                            Madikeri
                        </h1>
                        <h4 className="section2-box-description-1 text-white">
                            209 Kilometres away
                        </h4>
                    </div>
                    <div className="section2-box section2-box-3">
                        <img src={chikmagalur} className="section2-image"></img>
                        <h1 className="section2-box-description text-white">
                            Chikmagalur
                        </h1>
                        <h4 className="section2-box-description-1 text-white">
                            199 Kilometres away
                        </h4>
                    </div>
                    <div className="section2-box section2-box-4">
                        <img src={ooty} className="section2-image"></img>
                        <h1 className="section2-box-description text-white">
                            Ooty
                        </h1>
                        <h4 className="section2-box-description-1 text-white">
                            199 Kilometres away
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}
