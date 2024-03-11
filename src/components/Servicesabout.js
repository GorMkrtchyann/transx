import React from "react";
import roadFreightImg from "../assets/images/services/road_freight.jpg";
import shipImg from "../assets/images/services/ship.jpg";
import planeImg from "../assets/images/services/plane.jpg";
import trainImg from "../assets/images/services/train.jpg";
import footerBgImg from "../assets/images/bg/footer-bg.png";
import sectionImg from "../assets/images/services/section_1.jpg";

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
            <section className="section bg--dgray">
                <img className="section--bg t50 r0" src={footerBgImg} alt="img" />
                <div className="container">
                    <div className="row bottom-70">
                        <div className="col-12">
                            <div className="heading heading--white">
                                <span className="heading__pre-title">Steps for work</span>
                                <h3 className="heading__title">How we works</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row offset-50">
                        <div className="col-md-6 col-xl-3">
                            <div className="icon-item icon-item--white">
                                <div className="icon-item__count ">
                                    <span className="box-count--green">01</span>
                                </div>
                                <h6 className="icon-item__title">Listening you</h6>
                                <p className="icon-item__text">
                                    Kokanee sprat shrimpfish. Pacific hake false trevally queen
                                    parrotfish Black prickleback
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="icon-item icon-item--white">
                                <div className="icon-item__count">
                                    <span className="box-count--green">02</span>
                                </div>
                                <h6 className="icon-item__title">Lane pairing analysis</h6>
                                <p className="icon-item__text">
                                    Greenling sleeper; Owens pupfish large-eye bream kokanee sprat
                                    shrimpfish. Pacific hake false
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="icon-item icon-item--white">
                                <div className="icon-item__count">
                                    <span className="box-count--green">03</span>
                                </div>
                                <h6 className="icon-item__title">Check all details</h6>
                                <p className="icon-item__text">
                                    Mosshead warbonnet sweeper! Greenling sleeper; Owens pupfish
                                    large-eye bream kokanee sprat
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="icon-item icon-item--white">
                                <div className="icon-item__count">
                                    <span className="box-count--green">04</span>
                                </div>
                                <h6 className="icon-item__title">Fast & efficient delivery</h6>
                                <p className="icon-item__text">
                                    Pacific hake false trevally queen parrotfish Black prickleback
                                    humuhumunukunukuapua'a
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 top-50 top-lg-0">
                            <div className="heading bottom-20">
                                <h3 className="heading__title">
                                    Our mission is to <span className="color--green">give you</span>{" "}
                                    good service
                                </h3>
                            </div>
                            <p>
                                <strong>
                                    Trumpeter ropefish bonito roughy cobbler dogteeth tetra
                                    sturgeon pollock sea snail, saury woody sculpin southern
                                    sandfish blue.
                                </strong>
                            </p>
                            <p className="bottom-0">
                                Tench South American darter bobtail snipe eel armored searobin
                                lumpsucker combfish flat loach tang píntano spiderfish gunnel.
                                Skilfish, halosaur skilfish manefish, bonnetmouth alfonsino
                                largenose fish moonfish aruana glowlight danio. Basking shark
                                halibut, North Pacific daggertooth, bonnetmouth sand stargazer
                                sand goby. Queen triggerfish sand dab hammerhead shark zebra
                                trout pelican gulper, common tunny boarfish. Pleco riffle dace
                                flier trunkfish: North Pacific
                            </p>
                        </div>
                        <div className="col-lg-6 col-xl-5 offset-xl-1">
                            <img className="w-100" src={sectionImg} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
