import {Images} from "../assets/images/Images";
import CallIcon from '@mui/icons-material/Call';
import {Link} from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useNavigate} from "react-router";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {useState} from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {useMediaQuery} from "@mui/material";

export const Header = () => {
    const [servicesNext, setServiceNext] = useState(false)
    const [mobMenu, setMobMenu] = useState(false)
    const [dropdownMenu, setDropdownMenu] = useState(false)
    const media = useMediaQuery('(max-width: 890px)')
    const navigate = useNavigate()

    return(
        <div className={'header'}>
            <div className={'sub-header'}>
                <div className="container">
                    <div className="logo">
                        <img
                            src={Images.logo}
                            alt="logo"
                            onClick={() => navigate('/')}
                        />
                    </div>
                    <div className="header__right">
                        <div className="header__right__top">
                            <div className="header__right__top--call">
                                <CallIcon/>
                                <div>
                                    <b>Free Call</b>
                                    <a href="tel:+0012123456">+00 12 123 456</a>
                                </div>
                            </div>
                            <div className="header__right__top--mail">
                                <MailOutlineIcon/>
                                <div>
                                    <b>Mail us</b>
                                    <a href="mailto:support@mail.com">Support@mail.com</a>
                                </div>
                            </div>
                            <Link to={'/calculator'} className="header__right__top--btn">get a quote</Link>
                        </div>
                        <div className={'dec-line'}/>
                        <div className="header__right__bottom">
                            <Link to={'/'} className={'active'}>Home</Link>
                            <Link to={'/about'}>About Us</Link>
                            <div className={'dropdown'}
                                 onMouseEnter={() => setDropdownMenu(true)}
                                 onMouseLeave={() => setDropdownMenu(false)}
                            >
                                <Link to={'/'}>Services <ArrowDropDownIcon/></Link>
                                {
                                    dropdownMenu ?
                                        <div className={'dropdown__menu'}>
                                            <Link to={'/'}>Truck Freight</Link>
                                            <Link to={'/'}>Ship Freight</Link>
                                            <Link to={'/'}>Plane Freight</Link>
                                            <Link to={'/'}>Train Freight</Link>
                                        </div>
                                        :
                                        null
                                }

                            </div>
                            <Link to={'/calculator'}>Calculator</Link>
                            <Link to={'/contact'}>Contact us</Link>
                        </div>
                    </div>
                    <div className={'mob-menu-btn'} onClick={() => setMobMenu(!mobMenu)}>
                        <MenuIcon sx={{width: 40, height: 40, color: "black"}}/>
                    </div>
                </div>
            </div>
            {
                media ?
                    <div className={`mob-menu ${mobMenu ? 'active' : ''}`}>
                        {
                            !servicesNext ?
                                <>
                                    <Link to={'/'} className={'active'}>Home</Link>
                                    <Link to={'/'}>About Us</Link>
                                    <Link to={'/'} onClick={() => setServiceNext(true)}>Services <ArrowRightIcon/></Link>
                                    <Link to={'/'}>Calculator</Link>
                                    <Link to={'/'}>Contact</Link>
                                </>
                                :
                                <>
                                    <div className={'mob-menu--perv'} onClick={() => setServiceNext(false)}>
                                        <ArrowLeftIcon sx={{width: 40, height: 40, color: "white"}}/>
                                    </div>
                                    <Link to={'/'}>Truck Freight</Link>
                                    <Link to={'/'}>Ship Freight</Link>
                                    <Link to={'/'}>Plane Freight</Link>
                                    <Link to={'/'}>Train Freight</Link>
                                </>
                        }
                    </div>
                    :
                    null
            }
        </div>
    )
}