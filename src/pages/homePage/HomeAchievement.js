import React from 'react';

const HomeAchievement = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12 map-box"><img src="img/achievement-map.png" alt="img"/></div>
                </div>
                <div className="row offset-50">
                    <div className="col-md-6 col-lg-4 text-center">
                        <div className="counter counter--blue">
                            <div className="counter__top"><span className="js-counter counter__count">5</span><span
                                className="counter__subject">millions</span></div>
                            <div className="counter__lower"><span
                                className="counter__details">Delivered packeges</span></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center">
                        <div className="counter counter--blue">
                            <div className="counter__top"><span className="js-counter counter__count">2</span><span
                                className="counter__subject">million</span></div>
                            <div className="counter__lower"><span className="counter__details">Miles driven each of the year</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center">
                        <div className="counter counter--blue">
                            <div className="counter__top"><span className="js-counter counter__count">50</span><span
                                className="counter__subject">years</span></div>
                            <div className="counter__lower"><span
                                className="counter__details">Total warehouse area</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeAchievement;