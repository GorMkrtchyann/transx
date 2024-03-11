import React from 'react';
import {Link} from "react-router-dom";

const TransportServices = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className="row bottom-70">
                    <div className="col-lg-4">
                        <div className="heading bottom-40"><span className="heading__pre-title">Services</span>
                            <h3 className="heading__title">Transporterium Services</h3><span
                                className="heading__layout">Services</span>
                        </div>
                        <Link className="button button--green d-none d-lg-inline-block"
                              to="#"><span>All services</span>
                            <svg className="icon">
                                <use xlinkHref="#arrow"></use>
                            </svg>
                        </Link>
                    </div>
                    <div className="col-lg-8">
                        <p><strong>Rockling Devario deep sea bonefish cutthroat trout streamer fish kaluga sailback
                            scorpionfish sand dab, turkeyfish golden loach sand diver. Leopard danio píntano
                            bonnetmouth; blue whiting, suckermouth armored catfish luderick blackchin kingfish.
                            Midshipman, lightfish longfin smelt pickerel houndshark whipt.</strong></p>
                        <p className="bottom-0">Pacific hake false trevally queen parrotfish Black prickleback
                            humuhumunukunukuapua'a mosshead warbonnet sweeper! Greenling sleeper; Owens pupfish
                            large-eye bream kokanee sprat shrimpfish grunter, Ratfish combtooth blenny, bigeye
                            squaretail nurseryfish yellowtail barracuda. Halibut: mosshead warbonnet sweeper!
                            Greenling sleeper;</p>
                    </div>
                </div>
                <div className="row offset-50">
                    <div className="col-sm-6 col-xl-3">
                        <div className="count-item">
                            <div className="count-item__img"><img src="img/front-serv_1.png" alt="icon"/></div>
                            <h6 className="count-item__title"><span className="count-item__count">01</span> <span>Truck Freight</span>
                            </h6>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="count-item">
                            <div className="count-item__img"><img src="img/front-serv_2.png" alt="icon"/></div>
                            <h6 className="count-item__title"><span className="count-item__count">02</span> <span>Shipping Freight</span>
                            </h6>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="count-item">
                            <div className="count-item__img"><img src="img/front-serv_3.png" alt="icon"/></div>
                            <h6 className="count-item__title"><span className="count-item__count">03</span> <span>Plane Freight</span>
                            </h6>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="count-item">
                            <div className="count-item__img"><img src="img/front-serv_4.png" alt="icon"/></div>
                            <h6 className="count-item__title"><span className="count-item__count">04</span> <span>Train Freight</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="row top-70 d-flex d-lg-none">
                    <div className="col-12 text-center"><Link className="button button--green" to="#"><span>All services</span>
                        <svg className="icon">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </Link></div>
                </div>
            </div>
        </section>
    );
}

export default TransportServices;