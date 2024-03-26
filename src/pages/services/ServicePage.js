import React from 'react'
import {Banner} from '../../components/banner'
import typographyImg from '../../assets/images/services/typography.jpg'
import {Transportservice} from '../../components/Transportservice'
import {ServicesAbout} from '../../components/Servicesabout'
import '../../assets/style/services.scss'
import {Footer} from '../../components/footer'
import {Header} from "../../components/header";

export const ServicePage = () => {
    return (
        <>
            <Header/>
            <div className="page-wrapper services">
                <main className="main">
                    <Banner title={"Service"} img={typographyImg}/>
                    <Transportservice/>
                    <ServicesAbout/>
                </main>
                <Footer/>
            </div>
        </>
    )
}
