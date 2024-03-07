import React from 'react';

function HeroBlock(props) {
    return (
        <section className="hero-block">
            <picture>
                <source srcSet="img/about_bg.jpg" media="(min-width: 992px)"/>
                <img className="img--bg" src="img/about_bg.jpg" alt="img"/>
            </picture>
            <div className="hero-block__layout"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="align-container">
                            <div className="align-container__item"><span
                                className="hero-block__overlay">TransX</span>
                                <h1 className="hero-block__title">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBlock;