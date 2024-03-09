import React from 'react'
import roadFreightImg from '../assets/img/services/road_freight.jpg'
import shipImg from '../assets/img/services//ship.jpg'
import planeImg from '../assets/img/services/plane.jpg'
import trainImg from '../assets/img/services/train.jpg'

export const ServicesAbout = () => {
    return (
        <>
            <section class="section bg--lgray pb-0 services-inner">
                <div class="container bottom-70">
                    <div class="row">
                        <div class="col-12">
                            <div class="heading heading--center"><span class="heading__pre-title">Services</span>
                                <h3 class="heading__title">We manage lead logistics for leadership</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container container--wide">
                    <div class="row offset-50">
                        <div class="col-md-6 col-xl-3">
                            <div class="img-box">
                                <div class="img-box__overlay"></div>
                                <div class="img-box__text-layout">Transporterium Services</div><img class="img--bg" src={roadFreightImg}alt="road freight" />
                                <div class="img-box__details">
                                    <h5 class="img-box__title"><a href="/#">Truck Freight</a></h5>
                                    <div class="img-box__count">01</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <div class="img-box">
                                <div class="img-box__overlay"></div>
                                <div class="img-box__text-layout">Transporterium Services</div><img class="img--bg" src={trainImg} alt="train freight" />
                                <div class="img-box__details">
                                    <h5 class="img-box__title"><a href="/#">Train Freight</a></h5>
                                    <div class="img-box__count white">02</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <div class="img-box">
                                <div class="img-box__overlay"></div>
                                <div class="img-box__text-layout">Transporterium Services</div><img class="img--bg" src={planeImg} alt="plane freight" />
                                <div class="img-box__details">
                                    <h5 class="img-box__title"><a href="/#">Plane Freight</a></h5>
                                    <div class="img-box__count">03</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <div class="img-box">
                                <div class="img-box__overlay"></div>
                                <div class="img-box__text-layout">Transporterium Services</div><img class="img--bg" src={shipImg} alt="ship freight" />
                                <div class="img-box__details">
                                    <h5 class="img-box__title"><a href="/#">Ship Freight</a></h5>
                                    <div class="img-box__count">04</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section bg--dgray"><img class="section--bg t50 r0" src="img/testimonials-bg.png" alt="img" />
                <div class="container">
                    <div class="row bottom-70">
                        <div class="col-12">
                            <div class="heading heading--white"><span class="heading__pre-title">Steps for work</span>
                                <h3 class="heading__title">How we works</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row offset-50">
                        <div class="col-md-6 col-xl-3">
                            <div class="icon-item icon-item--white">
                                <div class="icon-item__count"><span>01</span></div>
                                <h6 class="icon-item__title">Listening you</h6>
                                <p class="icon-item__text">Kokanee sprat shrimpfish. Pacific hake false trevally queen parrotfish Black prickleback</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <div class="icon-item icon-item--white">
                                <div class="icon-item__count"><span>02</span></div>
                                <h6 class="icon-item__title">Lane pairing analysis</h6>
                                <p class="icon-item__text">Greenling sleeper; Owens pupfish large-eye bream kokanee sprat shrimpfish. Pacific hake false</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <div class="icon-item icon-item--white">
                                <div class="icon-item__count"><span>03</span></div>
                                <h6 class="icon-item__title">Check all details</h6>
                                <p class="icon-item__text">Mosshead warbonnet sweeper! Greenling sleeper; Owens pupfish large-eye bream kokanee sprat</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <div class="icon-item icon-item--white">
                                <div class="icon-item__count"><span>04</span></div>
                                <h6 class="icon-item__title">Fast & efficient delivery</h6>
                                <p class="icon-item__text">Pacific hake false trevally queen parrotfish Black prickleback humuhumunukunukuapua'a</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
