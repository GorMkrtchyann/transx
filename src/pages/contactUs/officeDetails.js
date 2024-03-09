export const OfficeDetails = ({title, phones, email, address, socialsMedia}) => {

    return (
        <>
            <h5 className="contacts__title">{title}</h5>
            <div className="contacts-item">
                <div className="contacts-item__img">
                    <svg className="icon">
                        <use xlinkHref="#phone"/>
                    </svg>
                </div>
                <div className="contacts-item__details">
                    {
                        phones?.map((el, i) => (
                            <a className="contacts-item__link" href={`tel:${el}`} key={el+i}>{el}</a>
                        ))
                    }
                </div>
            </div>
            <div className="contacts-item">
                <div className="contacts-item__img">
                    <svg className="icon">
                        <use xlinkHref="#mail"/>
                    </svg>
                </div>
                <div className="contacts-item__details">
                    <a className="contacts-item__link"
                       href="mailto:transporteriumus@gmail.com"
                    >{email}</a>
                </div>
            </div>
            <div className="contacts-item">
                <div className="contacts-item__img">
                    <svg className="icon">
                        <use xlinkHref="#pin"/>
                    </svg>
                </div>
                <div className="contacts-item__details"><span>{address}</span>
                </div>
            </div>
            <div className="contacts-item">
                <div className="contacts-item__img">
                    <svg className="icon">
                        <use xlinkHref="#share"/>
                    </svg>
                </div>
                <div className="contacts-item__details">
                    <ul className="socials socials--dark list--reset">
                        <li className="socials__item"><a className="socials__link" href={socialsMedia.facebook}>
                            <svg className="icon">
                                <use xlinkHref="#facebook"/>
                            </svg>
                        </a></li>
                        <li className="socials__item"><a className="socials__link" href={socialsMedia.x}>
                            <svg className="icon">
                                <use xlinkHref="#twitter"/>
                            </svg>
                        </a></li>
                        <li className="socials__item"><a className="socials__link" href={socialsMedia.linkedin}>
                            <svg className="icon">
                                <use xlinkHref="#linkedin"/>
                            </svg>
                        </a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}