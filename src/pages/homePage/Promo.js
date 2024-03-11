import React from 'react';
import {Link} from "react-router-dom";
import Carousel from "nuka-carousel"

const Promo = (props) => {
    const renderBottomCenterControls = ({ currentSlide, goToSlide }) => {
        const totalSlides = 3; // Total number of slides
        const lines = [];

        const handleClick = (index) => {
            goToSlide(index)
        }

        for (let i = 0; i < totalSlides; i++) {
            lines.push(
                <span
                    className={'slide-control'}
                    key={i}
                    style={{
                        display: 'inline-block',
                        width: '60px',
                        height: currentSlide === i ? '5px' : '2px',
                        backgroundColor: currentSlide === i ? '#28a745' : 'white',
                        margin: '0 2px',
                        cursor: 'pointer',
                        transition: '100ms height, background-color'
                    }}
                    onClick={() => {handleClick(i)}}
                    onMouseEnter={(e) => {
                        e.target.style.height = '5px';
                        e.target.style.backgroundColor = '#28a745';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.height = currentSlide === i ? '5px' : '2px'
                        e.target.style.backgroundColor = currentSlide === i ? '#28a745' : 'white'
                    }}
                />
            );
        }

        return <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', left: "11%", bottom: '100px', zIndex: "10" }}>{lines}</div>;
    };

    return (
        <div className="promo">
            <div className="promo-slider">
                    <Carousel autoplay={true}
                              autoplayInterval={3000}
                              wrapAround={true}
                              renderCenterLeftControls={() => null}
                              renderCenterRightControls={() => null}
                              draggable={true}
                              renderBottomCenterControls={renderBottomCenterControls}>
                        <div className="promo-slider__item">
                            <div className="promo-slider__layout"></div>
                            <picture>
                                <source srcSet="img/promo_1.jpg" media="(min-width: 992px)"/>
                                <img className="img--bg" src="img/promo_1.jpg" alt="img"/>
                            </picture>
                            <div className="align-container">
                                <div className="align-container__item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-9 col-xl-7">
                                                <div className="promo-slider__wrapper-1"><span
                                                    className="promo-slider__overlay">TransX</span>
                                                    <h2 className="promo-slider__title">Transportation Services around the
                                                        World</h2>
                                                </div>
                                                <div className="promo-slider__wrapper-2">
                                                    <p className="promo-slider__subtitle">Rockling Devario deep sea bonefish
                                                        cutthroat trout streamer fish kaluga sailback scorpionfish sand dab,
                                                        turkeyfish golden loach sand diver. Leopard danio píntano
                                                        bonnetmouth; blue whiting, suckermouth armored catfish luderick
                                                        blackchin kingfish.</p>
                                                </div>
                                                <div className="promo-slider__wrapper-3"><Link className="button button--promo"
                                                                                               to="#"><span>Explore more</span>
                                                    <svg className="icon">
                                                        <use xlinkHref="#arrow"></use>
                                                    </svg>
                                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="promo-slider__item text-center">
                            <div className="promo-slider__layout"></div>
                            <picture>
                                <source srcSet="img/promo_2.jpg" media="(min-width: 992px)"/>
                                <img className="img--bg" src="img/promo_2.jpg" alt="img"/>
                            </picture>
                            <div className="align-container">
                                <div className="align-container__item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="promo-slider__wrapper-1"><span
                                                    className="promo-slider__overlay position-center">TransX</span>
                                                    <h2 className="promo-slider__title">Worldwide Shipping</h2>
                                                </div>
                                                <div className="promo-slider__wrapper-2">
                                                    <p className="promo-slider__subtitle">Roach yellowfin cutthroat trout
                                                        zebra pleco ocean sunfish temperate bass pikehead elephant fish.
                                                        Long-finned char northern pike bluegill temperate. Leopard danio
                                                        píntano bonnetmouth; blue whiting, suckermouth armored catfish
                                                        luderick blackchin kingfish.</p>
                                                </div>
                                                <div className="promo-slider__wrapper-3"><Link className="button button--promo"
                                                                                               to="#"><span>Explore more</span>
                                                    <svg className="icon">
                                                        <use xlinkHref="#arrow"></use>
                                                    </svg>
                                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="promo-slider__item">
                            <div className="promo-slider__layout"></div>
                            <picture>
                                <source srcSet="img/promo_3.jpg" media="(min-width: 992px)"/>
                                <img className="img--bg" src="img/promo_3.jpg" alt="img"/>
                            </picture>
                            <div className="align-container">
                                <div className="align-container__item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-9 col-xl-7">
                                                <div className="promo-slider__wrapper-1"><span
                                                    className="promo-slider__overlay">TransX</span>
                                                    <h2 className="promo-slider__title">Deliver Packages <br/>in any Way
                                                    </h2>
                                                </div>
                                                <div className="promo-slider__wrapper-2">
                                                    <p className="promo-slider__subtitle">Rockling Devario deep sea bonefish
                                                        cutthroat trout streamer fish kaluga sailback scorpionfish sand dab,
                                                        turkeyfish golden loach sand diver. Leopard danio píntano
                                                        bonnetmouth; blue whiting, suckermouth armored catfish luderick
                                                        blackchin kingfish.</p>
                                                </div>
                                                <div className="promo-slider__wrapper-3"><Link className="button button--promo"
                                                                                               to="#"><span>Explore more</span>
                                                    <svg className="icon">
                                                        <use xlinkHref="#arrow"></use>
                                                    </svg>
                                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
            </div>

        </div>
    );
}

export default Promo;