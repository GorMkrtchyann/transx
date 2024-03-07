import React from 'react';
import {Link} from "react-router-dom";

function FooterComponent(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <h6 className="page-footer__title title--white">Discover</h6>
                    <ul className="page-footer__menu list--reset">
                        <li><Link to={'#'}>About us</Link></li>
                        <li><Link to={'#'}>Pricing plan</Link></li>
                        <li><Link to={'#'}>Elements</Link></li>
                        <li><Link to={'#'}>Team</Link></li>
                        <li><Link to={'#'}>Warehouse</Link></li>
                        <li><Link to={'#'}>Contact</Link></li>
                        <li><Link to={'#'}>Careers</Link></li>
                        <li><Link to={'#'}>Calculator</Link></li>
                        <li><Link to={'#'}>Site map</Link></li>
                        <li><Link to={'#'}>Services</Link></li>
                        <li><Link to={'#'}>Contact</Link></li>
                        <li><Link to={'#'}>FAQ</Link></li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 top-40 top-md-0">
                    <h6 className="page-footer__title title--white">USA office</h6>
                    <div className="page-footer__details">
                        <p><strong>Location:</strong> <span>av. Washington 165, NY CA 54003</span></p>
                        <p><strong>Phone:</strong> <a href="tel:+31859644725">+31 85 964 47 25</a> <a
                            href="tel:+31859644725">+31 65 792 63 11</a></p>
                        <p><strong>Email:</strong> <a href="mailto:info@transx.com">info@transx.com</a></p>
                        <p><strong>Openning hours:</strong> <span>9:00 AM - 5:00 PM</span></p>
                    </div>
                </div>
                <div
                    className="col-lg-3 d-flex flex-column justify-content-between align-items-sm-center align-items-lg-end top-40 top-lg-0">
                    <div className="page-footer__logo"><Link to={"index.html"}><img src="img/logo_white.png"
                                                                                    alt="logo"/></Link></div>
                    <ul className="socials list--reset">
                        <li className="socials__item"><Link className="socials__link" to={'#'}>
                            <svg className="icon">
                                <use xlinkHref="#youtube"></use>
                            </svg>
                        </Link></li>
                        <li className="socials__item"><Link className="socials__link" to={'#'}>
                            <svg className="icon">
                                <use xlinkHref="#facebook"></use>
                            </svg>
                        </Link></li>
                        <li className="socials__item"><Link className="socials__link" to={'#'}>
                            <svg className="icon">
                                <use xlinkHref="#twitter"></use>
                            </svg>
                        </Link></li>
                        <li className="socials__item"><Link className="socials__link" to={'#'}>
                            <svg className="icon">
                                <use xlinkHref="#linkedin"></use>
                            </svg>
                        </Link></li>
                        <li className="socials__item"><Link className="socials__link" to={'#'}>
                            <svg className="icon">
                                <use xlinkHref="#inst"></use>
                            </svg>
                        </Link></li>
                    </ul>
                </div>
            </div>
            <div className="row top-50">
                <div className="col-lg-6 text-sm-center text-lg-left">
                    <div className="page-footer__privacy"><Link to={'#'}>Terms and conditions</Link><Link to={'#'}>Privacy
                        policy</Link><Link to={'#'}>Cookies</Link></div>
                </div>
                <div className="col-lg-6 text-sm-center text-lg-right">
                    <div className="page-footer__copyright">© 2020 TransX. All rights reserved</div>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;