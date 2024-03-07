import React from 'react';

function Features(props) {
    return (
        <div className="features-section home-2 border-top">
            <div className="container">
                <div className="row feature-content">
                    <div className="col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 pr-0">
                        <div className="features">
                            <span className="title">Features</span>
                            <h2 className="subtitle">WHY CHOOSE US</h2>
                            <div className="feature-lists">
                                <div className="single-feature wow fadeInUp" data-wow-duration="1s">
                                    <div className="icon-wrapper"><i className="flaticon-customer-service"></i></div>
                                    <div className="feature-details">
                                        <h4>24/7 support</h4>
                                        <p>We offers logistic management services and supply chain perspiciatis unde omnis iste natus error sit voluptat. </p>
                                    </div>
                                </div>
                                <div className="single-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                    <div className="icon-wrapper"><i className="flaticon-email"></i></div>
                                    <div className="feature-details">
                                        <h4>On time delivery</h4>
                                        <p>We offers logistic management services and supply chain perspiciatis unde omnis iste natus error sit voluptat. </p>
                                    </div>
                                </div>
                                <div className="single-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                    <div className="icon-wrapper"><i className="flaticon-worldwide"></i></div>
                                    <div className="feature-details">
                                        <h4>global service</h4>
                                        <p>We offers logistic management services and supply chain perspiciatis unde omnis iste natus error sit voluptat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;