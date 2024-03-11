import React from "react";
import roadFreightImg from "../assets/images/services/road_freight.svg";
import shipImg from "../assets/images/services//ship.svg";
import planeImg from "../assets/images/services/plane.svg";
import trainImg from "../assets/images/services/train.svg";

export const Transportservice = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="row align-items-end bottom-70">
                    <div className="col-xl-4">
                        <div className="heading">
                            <span className="heading__pre-title">Services</span>
                            <h3 className="heading__title">Transporterium Services</h3>
                        </div>
                    </div>
                    <div className="col-xl-8 top-20 top-xl-0">
                        <p className="bottom-0">
                            Rockling Devario deep sea bonefish cutthroat trout streamer fish
                            kaluga sailback scorpionfish sand dab, turkeyfish golden loach
                            sand diver. Leopard danio píntano bonnetmouth; blue whiting,
                            suckermouth armored catfish luderick blackchin kingfish. Greenling
                            sleeper; Owens pupfish large-eye bream kokanee sprat shrimpfish.
                            Pacific hake false trevally queen parrotfish Black prickleback
                            humuhumunukunukuapua'a mosshead warbonnet sweeper!
                        </p>
                    </div>
                </div>
                <div className="row offset-50">
                    <div className="col-md-6 col-xl-3">
                        <div className="icon-item">
                            <div className="icon-item__img icon-item__img--small">
                                <img src={roadFreightImg} alt="road freight" />
                            </div>
                            <h6 className="icon-item__title">Road Freight</h6>
                            <p className="icon-item__text">
                                Kokanee sprat shrimpfish. Pacific hake false trevally queen
                                parrotfish Black prickleback
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="icon-item">
                            <div className="icon-item__img icon-item__img--small">
                                <img src={shipImg} alt="shipping" />
                            </div>
                            <h6 className="icon-item__title">Shipping Freight</h6>
                            <p className="icon-item__text">
                                Greenling sleeper; Owens pupfish large-eye bream kokanee sprat
                                shrimpfish. Pacific hake false{" "}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="icon-item">
                            <div className="icon-item__img icon-item__img--small">
                                <img src={planeImg} alt="plane" />
                            </div>
                            <h6 className="icon-item__title">Air Freight</h6>
                            <p className="icon-item__text">
                                Mosshead warbonnet sweeper! Greenling sleeper; Owens pupfish
                                large-eye bream kokanee sprat{" "}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="icon-item">
                            <div className="icon-item__img icon-item__img--small">
                                <img src={trainImg} alt="train" />
                            </div>
                            <h6 className="icon-item__title">Train Freight</h6>
                            <p className="icon-item__text">
                                Pacific hake false trevally queen parrotfish Black prickleback
                                humuhumunukunukuapua'a
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
