import React from 'react';

export const Banner = ({title, img}) => {
    return (
        <section className="hero-block">
            <picture>
                <source srcSet={img} media="(min-width: 992px)"/>
                <img className="img--bg" src={img} alt="img"/>
            </picture>
            <div className="hero-block__layout"/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="align-container">
                            <div className="align-container__item"><span
                                className="hero-block__overlay">Vila Trans</span>
                                <h1 className="hero-block__title">{title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}