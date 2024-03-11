import React from 'react';
import {Link} from "react-router-dom";
import {Images} from "../assets/images/Images";


const FooterAddress = ({title, location, phone, email, hours}) => {

    return (
        <>
            <h6 className="page-footer__title title--white">{title}</h6>
            <div className="page-footer__details">
                <p><strong>Location:</strong> <span>{location}</span></p>
                <p><strong>Phone:</strong>
                    {
                        phone?.map((el, i) => (
                            <a href={"tel:" + el} key={el+i}>{el}</a>
                        ))
                    }
                </p>
                <p><strong>Email:</strong> <a href={"mailto:" + email}>{email}</a></p>
                <p><strong>Openning hours:</strong> <span>{hours}</span></p>
            </div>
        </>
    )
}

export const Footer = () => {
    return (
        <footer className="page-footer"><img className="section--bg b0 r0" src={Images.footerBg} alt="bg"/>
            <div className="container">
                <div className={'footer__top'}>
                    <div className="col-lg-3">
                        <h6 className="page-footer__title title--white">Discover</h6>
                        <ul className="page-footer__menu list--reset">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About us</Link></li>
                            <li><Link to={'/service'}>Services</Link></li>
                            <li><Link to={'/calculator'}>Calculator</Link></li>
                            <li><Link to={'/contact'}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={'footer__top__scroll'}>
                        <div className="">
                            <FooterAddress
                                title={'USA office'}
                                location={'av. Washington 165, NY CA 54003'}
                                phone={['+31 85 964 47 25', '+31 65 792 63 11']}
                                email={'info@transx.com'}
                                hours={'9:00 AM - 5:00 PM'}
                            />
                        </div>
                        <div className="">
                            <FooterAddress
                                title={'USA office'}
                                location={'av. Washington 165, NY CA 54003'}
                                phone={['+31 85 964 47 25', '+31 65 792 63 11']}
                                email={'info@transx.com'}
                                hours={'9:00 AM - 5:00 PM'}
                            />
                        </div>
                        <div className="">
                            <FooterAddress
                                title={'USA office'}
                                location={'av. Washington 165, NY CA 54003'}
                                phone={['+31 85 964 47 25', '+31 65 792 63 11']}
                                email={'info@transx.com'}
                                hours={'9:00 AM - 5:00 PM'}
                            />
                        </div>
                        <div className="">
                            <FooterAddress
                                title={'USA office'}
                                location={'av. Washington 165, NY CA 54003'}
                                phone={['+31 85 964 47 25', '+31 65 792 63 11']}
                                email={'info@transx.com'}
                                hours={'9:00 AM - 5:00 PM'}
                            />
                        </div>
                    </div>
                </div>
                <div className="footer__middle">
                    <div className="page-footer__logo">
                        <Link to={"/"}>
                            <img src={Images.logoWhite} alt="logo"/>
                        </Link>
                    </div>

                    <ul className="socials list--reset">
                        <li className="socials__item"><a className="socials__link" href="#">
                            <svg className="icon">
                                <use xlinkHref="#youtube"/>
                            </svg>
                        </a></li>
                        <li className="socials__item"><a className="socials__link" href="#">
                            <svg className="icon">
                                <use xlinkHref="#facebook"/>
                            </svg>
                        </a></li>
                        <li className="socials__item"><a className="socials__link" href="#">
                            <svg className="icon">
                                <use xlinkHref="#twitter"/>
                            </svg>
                        </a></li>
                        <li className="socials__item"><a className="socials__link" href="#">
                            <svg className="icon">
                                <use xlinkHref="#linkedin"/>
                            </svg>
                        </a></li>
                        <li className="socials__item"><a className="socials__link" href="#">
                            <svg className="icon">
                                <use xlinkHref="#inst"/>
                            </svg>
                        </a></li>
                    </ul>
                </div>
                <div className="row top-50">
                    <div className="col-lg-6 text-sm-center text-lg-left">
                        <div className="page-footer__privacy"><Link to={'#'}>Terms and conditions</Link><Link
                            to={'#'}>Privacy
                            policy</Link><Link to={'#'}>Cookies</Link></div>
                    </div>
                    <div className="col-lg-6 text-sm-center text-lg-right">
                        <div className="page-footer__copyright">© {new Date().getFullYear()} Vila Trans. All rights
                            reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


