import React from 'react'
import footerBgImg from "../assets/images/bg/footer-bg.png";

export const ServicesectionTwo = () => {
  return (
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
  )
}
