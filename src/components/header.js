import {Images} from "../assets/images/Images";
import CallIcon from '@mui/icons-material/Call';
import {Link} from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useLocation, useNavigate, useParams} from "react-router";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {useState} from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {useMediaQuery} from "@mui/material";
import {IconChevronDown} from "@tabler/icons-react";

const Language = () => {
    const [open, setOpen] = useState(false)
    const params = useParams()
    const {pathname} = useLocation()
    const media = useMediaQuery('(max-width: 1035px)')

    const languageArr = {
        en: 'ENG',
        ru: 'Рус',
        hy: 'Հայ',
    }

    const generateString = (lang) => {
        const string = pathname.split('/').slice(1, -1).toString()
        if (string === ''){
            return lang
        }else{
            return string+'/'+lang
        }
    }

    const languageArrKeys = Object.keys(languageArr)

    return(
        <div className={'languageSelect'}>
            <div
                style={{color: media ? '#29a948' : '#fff'}}
                className="languageSelect__btn" onClick={() => setOpen(!open)}>
                {languageArr[params.lang]}
                <IconChevronDown/>
            </div>
            {
                open ?
                    <div className="languageSelect__values">
                        {
                            Object.values(languageArr).map((el,i) => (
                                el !== languageArr[params.lang] ?
                                    <Link to={'/'+generateString(languageArrKeys[i])} key={el+i} onClick={() => setOpen(false)}>{el}</Link>
                                    :
                                    null
                            ))
                        }
                    </div>
                    :
                    null
            }
        </div>
    )
}

export const Header = () => {
    const [servicesNext, setServiceNext] = useState(false)
    const [mobMenu, setMobMenu] = useState(false)
    const [dropdownMenu, setDropdownMenu] = useState(false)
    const media = useMediaQuery('(max-width: 1035px)')
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const params = useParams()

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
                            <Language/>
                        </div>
                        <div className={'dec-line'}/>
                        <div className="header__right__bottom">
                            <Link to={'/'+params.lang} className={pathname === '/' ? 'active' : ''}>Home</Link>
                            <Link to={'/about/'+params.lang} className={pathname === '/about' ? 'active' : ''}>About Us</Link>
                            <div className={'dropdown'}
                                 onMouseEnter={() => setDropdownMenu(true)}
                                 onMouseLeave={() => setDropdownMenu(false)}
                            >
                                <Link to={'/service/'+params.lang} className={pathname === '/service' ? 'active' : ''}>Services <ArrowDropDownIcon/></Link>
                                {
                                    dropdownMenu ?
                                        <div className={'dropdown__menu'}>
                                            <Link to={'/service/details/'+params.lang} className={pathname === '/service/details' ? 'active' : ''}>Truck Freight</Link>
                                            <Link to={'/service/details/'+params.lang} className={pathname === '/service/details' ? 'active' : ''}>Ship Freight</Link>
                                            <Link to={'/service/details/'+params.lang} className={pathname === '/service/details' ? 'active' : ''}>Plane Freight</Link>
                                            <Link to={'/service/details/'+params.lang} className={pathname === '/service/details' ? 'active' : ''}>Train Freight</Link>
                                        </div>
                                        :
                                        null
                                }

                            </div>
                            <Link to={'/calculator/'+params.lang} className={pathname === '/calculator' ? 'active' : ''}>Calculator</Link>
                            <Link to={'/contact/'+params.lang} className={pathname === '/contact' ? 'active' : ''}>Contact us</Link>
                        </div>
                    </div>
                    {
                        media ?
                            <Language/>
                        :
                            null
                    }
                    <div style={{marginLeft: 5}} className={'mob-menu-btn'} onClick={() => setMobMenu(!mobMenu)}>
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
                                    <Link to={'/'+params.lang} className={pathname === '/' ? 'active' : ''}>Home</Link>
                                    <Link to={'/about/'+params.lang} className={pathname === '/about' ? 'active' : ''}>About Us</Link>
                                    <Link to={'/service/'+params.lang} className={pathname === '/service' ? 'active' : ''} onClick={() => setServiceNext(true)}>Services <ArrowRightIcon/></Link>
                                    <Link to={'/calculator/'+params.lang} className={pathname === '/calculator' ? 'active' : ''}>Calculator</Link>
                                    <Link to={'/contact/'+params.lang} className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
                                </>
                                :
                                <>
                                    <div className={'mob-menu--perv'} onClick={() => setServiceNext(false)}>
                                        <ArrowLeftIcon sx={{width: 40, height: 40, color: "white"}}/>
                                    </div>
                                    <Link to={'/service/details/'+params.lang} className={pathname === '/service/details' ? 'active' : ''}>Truck Freight</Link>
                                    <Link to={'/service/details/'+params.lang} className={pathname === '/service/details' ? 'active' : ''}>Ship Freight</Link>
                                    <Link to={'/service/details/'+params.lang} className={pathname === '/service/details' ? 'active' : ''}>Plane Freight</Link>
                                    <Link to={'/service/details/'+params.lang} className={pathname === '/service/details' ? 'active' : ''}>Train Freight</Link>
                                </>
                        }
                    </div>
                    :
                    null
            }
        </div>
    )
}