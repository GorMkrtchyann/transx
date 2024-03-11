import React from "react";
import roadFreightImg from "../assets/images/services/road_freight.jpg";
import shipImg from "../assets/images/services/ship.jpg";
import planeImg from "../assets/images/services/plane.jpg";
import trainImg from "../assets/images/services/train.jpg";
import { ServiceSectionThree } from "./Servicesectionthree";
import { ServicesectionTwo } from "./Servicesectiontwo";

export const ServicesAbout = () => {
    return (
        <>
            <section className="section bg--lgray pb-0 services-inner">
                <div className="container bottom-70">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading heading--center">
                                <span className="heading__pre-title">Services</span>
                                <h3 className="heading__title">
                                    We manage lead logistics for leadership
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container--wide">
                    <div className="row offset-50">
                        <div className="col-md-6 col-xl-3">
                            <div className="img-box">
                                <div className="img-box__overlay"></div>
                                <div className="img-box__text-layout">Transporterium Services</div>
                                <img className="img--bg" src={roadFreightImg} alt="road freight" />
                                <div className="img-box__details">
                                    <h5 className="img-box__title">
                                        <a href="/#">Truck Freight</a>
                                    </h5>
                                    <div className="box-count--white">01</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="img-box">
                                <div className="img-box__overlay"></div>
                                <div className="img-box__text-layout">Transporterium Services</div>
                                <img className="img--bg" src={trainImg} alt="train freight" />
                                <div className="img-box__details">
                                    <h5 className="img-box__title">
                                        <a href="/#">Train Freight</a>
                                    </h5>
                                    <div className="box-count--white">02</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="img-box">
                                <div className="img-box__overlay"></div>
                                <div className="img-box__text-layout">Transporterium Services</div>
                                <img className="img--bg" src={planeImg} alt="plane freight" />
                                <div className="img-box__details">
                                    <h5 className="img-box__title">
                                        <a href="/#">Plane Freight</a>
                                    </h5>
                                    <div className="box-count--white">03</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="img-box">
                                <div className="img-box__overlay"></div>
                                <div className="img-box__text-layout">Transporterium Services</div>
                                <img className="img--bg" src={shipImg} alt="ship freight" />
                                <div className="img-box__details">
                                    <h5 className="img-box__title">
                                        <a href="/#">Ship Freight</a>
                                    </h5>
                                    <div className="box-count--white">04</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ServicesectionTwo />
            <ServiceSectionThree />
        </>
    );
};
