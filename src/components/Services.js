import React from "react";

function Services(props) {
    return (
        <section className="section">
            <div className="container">
                <div className="row bottom-70">
                    <div className="col-12">
                        <div className="heading heading--center">
                            <span className="heading__pre-title">Services</span>
                            <h3 className="heading__title">To be comfortable for you</h3>
                        </div>
                    </div>
                </div>
                <div className="row offset-50" id={"rows"}>
                    <div
                        className="col-6 col-sm-4 col-lg-3 text-center"
                        id="service-icon"
                    >
                        <div className="icon-item">
                            <div className="icon-item__img">
                                <svg className="icon">
                                    <use href="#warehouse"></use>
                                </svg>
                            </div>
                            <h6 className="icon-item__title bottom-0">Warehouse</h6>
                        </div>
                    </div>
                    <div
                        className="col-6 col-sm-4 col-lg-3 text-center"
                        id="service-icon"
                    >
                        <div className="icon-item">
                            <div className="icon-item__img">
                                <svg className="icon">
                                    <use xlinkHref="#support"></use>
                                </svg>
                            </div>
                            <h6 className="icon-item__title bottom-0">Support 24/7</h6>
                        </div>
                    </div>
                    <div
                        className="col-6 col-sm-4 col-lg-3 text-center"
                        id="service-icon"
                    >
                        <div className="icon-item">
                            <div className="icon-item__img">
                                <svg className="icon">
                                    <use xlinkHref="#insurance"></use>
                                </svg>
                            </div>
                            <h6 className="icon-item__title bottom-0">Cargo Insurance</h6>
                        </div>
                    </div>
                    <div
                        className="col-6 col-sm-4 col-lg-3 text-center"
                        id="service-icon"
                    >
                        <div className="icon-item">
                            <div className="icon-item__img">
                                <svg className="icon">
                                    <use xlinkHref="#worldwide"></use>
                                </svg>
                            </div>
                            <h6 className="icon-item__title bottom-0">Worldwide</h6>
                        </div>
                    </div>
                    <div
                        className="col-6 col-sm-4 col-lg-3 text-center"
                        id="service-icon"
                    >
                        <div className="icon-item">
                            <div className="icon-item__img">
                                <svg className="icon">
                                    <use xlinkHref="#boxi"></use>
                                </svg>
                            </div>
                            <h6 className="icon-item__title bottom-0">Box checking</h6>
                        </div>
                    </div>
                    <div
                        className="col-6 col-sm-4 col-lg-3 text-center"
                        id="service-icon"
                    >
                        <div className="icon-item">
                            <div className="icon-item__img">
                                <svg className="icon">
                                    <use xlinkHref="#clock"></use>
                                </svg>
                            </div>
                            <h6 className="icon-item__title bottom-0">Always on time</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
