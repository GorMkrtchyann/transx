import React from 'react'
import { Banner } from '../../components/banner'
import typographyImg from '../../assets/img/services/typography.jpg'
import { Transportservice } from '../../components/Transportservice'
import { ServicesAbout } from '../../components/Servicesabout'
import '../../assets/style/services.scss'
export const ServicePage = () => {
    return (
        <div class="page-wrapper services">
            <main class="main">
                <Banner title={"Service"} img={typographyImg} />
                <Transportservice />
                <ServicesAbout />
            </main>
        </div>

    )
}
