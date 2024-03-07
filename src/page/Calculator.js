import React, { useState } from 'react'
import calculatorImg from '../assets/img/calculator.jpg';
// import footherBg from '../assets/img/footer-bg.png';
// import logoWhite from '../assets/img/logo_white.png';
import CalculatorForm from '../components/Calculatorform.js.js';
import '../assets/style/calculyator.scss'

function Calculyator() {
    const [form, setForm] = useState([{
        origin: "",
        dealyvery: "",
        service: "",
        weight: "",
        height: "",
        width: "",
        length: ""
    }])

    function handleForm() {
        if (form.length < 5) {
            return setForm([...form, {
                origin: "",
                dealyvery: "",
                service: "",
                weight: "",
                height: "",
                width: "",
                length: ""
            }])
        }
    }

    return (
        <div className="page-wrapper">
            <main className="main">
                {/* <!-- section start--> */}
                <section className="hero-block">
                    <img className="img--bg" src={calculatorImg} alt="img" />
                    <div className="hero-block__layout"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="align-container">
                                    <div className="align-container__item">
                                        <h1 className="hero-block__title">Calculator</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- section end--> */}
                {/* <!-- section start--> */}
                <section className="section calculator">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <form className="form calculator-form" action="#">
                                    <h5 className="calculator-form__title">Calculation form</h5>
                                    <div className="row bottom-30 pl-3 pr-3">
                                        {form.map((e, i) => {
                                            return <CalculatorForm key={i} i={i} e={e} form={form} setForm={setForm} />
                                        })}
                                        <div className="row ">
                                            <div className="col-sm-6  col-md-3">
                                                <input className="form__field" type="text" pattern="[A-Za-z]" minLength={3} name="name" placeholder="Your name" />
                                            </div>
                                            <div className="col-sm-6  col-md-3">
                                                <input className="form__field" type="tel" pattern="^\+[0-9]" minLength={3} name="tel" placeholder="+37494739446" />
                                            </div>

                                            <div className="col-sm-6 col-md-3">
                                                <input className="form__field" type="email" minLength={3} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email" placeholder="Transx@mail.ru" />
                                            </div>
                                            <div className="col-sm-6  col-md-3">
                                                <div className="button button--green add__button" onClick={() => { handleForm() }}><span>Add Task</span> </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-12 top-20">
                                            <button className="button button--green" type="submit"><span>Send a quote</span>
                                                <svg className="icon">
                                                    <symbol viewBox="0 0 150 78.6" id="arrow" xmlns="http://www.w3.org/2000/svg"><path d="M0 31.5h150v12.7H0V31.5zM112.8-.1l30.9 31.5-8.8 9L104 8.9l8.8-9zm18.1 51l-18.4 18.8 8.9 9 18.4-18.8-8.9-9z" /></symbol>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- section end--> */}
            </main>
            {/* <!-- footer start--> */}
            {/* <footer className="page-footer"><img className="section--bg b0 r0" src={footherBg} alt="bg" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <h6 className="page-footer__title title--white">Discover</h6>
                            <ul className="page-footer__menu list--reset">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Pricing plan</a></li>
                                <li><a href="#">Elements</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Warehouse</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Careers</a></li>
                                <li className="menu-item--active"><a href="#">Calculator</a></li>
                                <li><a href="#">Site map</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 top-40 top-md-0">
                            <h6 className="page-footer__title title--white">USA office</h6>
                            <div className="page-footer__details">
                                <p><strong>Location:</strong> <span>av. Washington 165, NY CA 54003</span></p>
                                <p><strong>Phone:</strong> <a href="tel:+31859644725">+31 85 964 47 25</a> <a href="tel:+31859644725">+31 65 792 63 11</a></p>
                                <p><strong>Email:</strong> <a href="mailto:info@transx.com">info@transx.com</a></p>
                                <p><strong>Openning hours:</strong> <span>9:00 AM - 5:00 PM</span></p>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex flex-column justify-content-between align-items-sm-center align-items-lg-end top-40 top-lg-0">
                            <div className="page-footer__logo"><a href="index.html"><img src={logoWhite} alt="logo" /></a></div>
                            <ul className="socials list--reset">
                                <li className="socials__item"><a className="socials__link" href="#">
                                    <svg className="icon">
                                        <symbol viewBox="0 0 72 50" id="youtube" xmlns="http://www.w3.org/2000/svg"><path d="M34.531.004L36.68.003c4.36.021 22.08.188 26.968 1.526a8.947 8.947 0 016.294 6.295c1.37 5.004 1.466 14.867 1.471 16.874l-.009 1.402c-.04 2.97-.258 11.562-1.462 16.135a8.947 8.947 0 01-6.294 6.294c-4.566 1.202-20.325 1.422-25.937 1.462l-3.332.004c-4.881-.028-21.798-.22-26.613-1.524a8.947 8.947 0 01-6.294-6.295C.159 37.245.017 27.446 0 25.386l.003-1.014c.025-2.486.201-11.74 1.467-16.548.823-3.06 3.294-5.53 6.294-6.353C12.582.203 29.855.028 34.53.004zm-5.943 14.29v21.412L47.176 25 28.588 14.294z" /></symbol>
                                    </svg></a></li>
                                <li className="socials__item"><a className="socials__link" href="#">
                                    <svg className="icon">
                                        <symbol viewBox="0 0 1024 1017.81" id="facebook" xmlns="http://www.w3.org/2000/svg"><g data-name="Слой 2"><path d="M1024 512C1024 229.25 794.75 0 512 0S0 229.25 0 512c0 255.53 187.2 467.36 432 505.81V660H302V512h130V399.17c0-128.31 76.47-199.23 193.39-199.23 56 0 114.63 10 114.63 10V336h-64.58c-63.58 0-83.45 39.46-83.45 80v96H734l-22.7 148H592v357.77C836.8 979.43 1024 767.6 1024 512z" data-name="Слой 1" /></g></symbol>
                                    </svg></a></li>
                                <li className="socials__item"><a className="socials__link" href="#">
                                    <svg className="icon">
                                        <symbol viewBox="0 0 6701 5446" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" id="twitter" xmlns="http://www.w3.org/2000/svg"><path d="M6701 645c-247 109-512 183-790 216 284-170 502-440 604-761-266 158-560 272-873 334C5391 167 5034 0 4638 0c-759 0-1375 616-1375 1375 0 108 12 213 36 313-1143-57-2156-605-2834-1437-118 203-186 439-186 691 0 477 243 898 612 1144-225-7-437-69-623-172v17c0 666 474 1222 1103 1348-115 31-237 48-362 48-89 0-175-9-259-25 175 546 683 944 1284 955-471 369-1063 589-1708 589-111 0-220-7-328-19 608 390 1331 618 2108 618 2529 0 3912-2095 3912-3912 0-60-1-119-4-178 269-194 502-436 686-712z" /></symbol>
                                    </svg></a></li>
                                <li className="socials__item"><a className="socials__link" href="#">
                                    <svg className="icon">
                                        <symbol viewBox="0 5 1036 990" id="linkedin" xmlns="http://www.w3.org/2000/svg"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" /></symbol>
                                    </svg></a></li>
                                <li className="socials__item"><a className="socials__link" href="#">
                                    <svg className="icon">
                                        <symbol viewBox="0 0 512 512" id="inst" xmlns="http://www.w3.org/2000/svg"><path d="M96.1 23.2c-16.2 6.3-29.9 14.7-43.6 28.4C38.8 65.2 30.4 79 24.1 95.1c-6.1 15.6-10.2 33.5-11.4 59.7-1.2 26.2-1.5 34.6-1.5 101.4s.3 75.2 1.5 101.4c1.2 26.2 5.4 44.1 11.4 59.7 6.3 16.2 14.7 29.9 28.4 43.6 13.7 13.7 27.4 22.1 43.6 28.4 15.6 6.1 33.5 10.2 59.7 11.4 26.2 1.2 34.6 1.5 101.4 1.5 66.8 0 75.2-.3 101.4-1.5 26.2-1.2 44.1-5.4 59.7-11.4 16.2-6.3 29.9-14.7 43.6-28.4 13.7-13.7 22.1-27.4 28.4-43.6 6.1-15.6 10.2-33.5 11.4-59.7 1.2-26.2 1.5-34.6 1.5-101.4s-.3-75.2-1.5-101.4c-1.2-26.2-5.4-44.1-11.4-59.7C484 79 475.6 65.2 462 51.6c-13.7-13.7-27.4-22.1-43.6-28.4-15.6-6.1-33.5-10.2-59.7-11.4-26.2-1.2-34.6-1.5-101.4-1.5s-75.2.3-101.4 1.5c-26.3 1.1-44.2 5.3-59.8 11.4zM356.6 56c24 1.1 37 5.1 45.7 8.5 11.5 4.5 19.7 9.8 28.3 18.4 8.6 8.6 13.9 16.8 18.4 28.3 3.4 8.7 7.4 21.7 8.5 45.7 1.2 25.9 1.4 33.7 1.4 99.4s-.3 73.5-1.4 99.4c-1.1 24-5.1 37-8.5 45.7-4.5 11.5-9.8 19.7-18.4 28.3-8.6 8.6-16.8 13.9-28.3 18.4-8.7 3.4-21.7 7.4-45.7 8.5-25.9 1.2-33.7 1.4-99.4 1.4s-73.5-.3-99.4-1.4c-24-1.1-37-5.1-45.7-8.5-11.5-4.5-19.7-9.8-28.3-18.4-8.6-8.6-13.9-16.8-18.4-28.3-3.4-8.7-7.4-21.7-8.5-45.7-1.2-25.9-1.4-33.7-1.4-99.4s.3-73.5 1.4-99.4c1.1-24 5.1-37 8.5-45.7 4.5-11.5 9.8-19.7 18.4-28.3 8.6-8.6 16.8-13.9 28.3-18.4 8.7-3.4 21.7-7.4 45.7-8.5 25.9-1.2 33.7-1.4 99.4-1.4s73.5.2 99.4 1.4z" /><path d="M130.9 256.3c0 69.8 56.6 126.3 126.3 126.3S383.5 326 383.5 256.3 327 130 257.2 130s-126.3 56.5-126.3 126.3zm208.3 0c0 45.3-36.7 82-82 82s-82-36.7-82-82 36.7-82 82-82 82 36.7 82 82z" /><circle cx="388.6" cy="125" r="29.5" /></symbol>
                                    </svg></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row top-50">
                        <div className="col-lg-6 text-sm-center text-lg-left">
                            <div className="page-footer__privacy"><a href="#">Terms and conditions</a><a href="#">Privacy policy</a><a href="#">Cookies</a></div>
                        </div>
                        <div className="col-lg-6 text-sm-center text-lg-right">
                            <div className="page-footer__copyright">© 2020 TransX. All rights reserved</div>
                        </div>
                    </div>
                </div>
            </footer> */}
        </div>)
}

export default Calculyator