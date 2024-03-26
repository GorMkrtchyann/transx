import React from 'react';
import {Banner} from "../../components/banner";
import About from "./About";
import Achievement from "./Achievement";
import Features from "../../components/Features";
import Quote from "../../components/Quote";
import Services from "../../components/Services";
import {Footer} from "../../components/footer";
import {Header} from "../../components/header";

export const AboutPage = () => {

    return (
        <>
            <Header/>
            <div className="page-wrapper">
                <main className="main">
                    <Banner title={'About Us'} img={"img/about_bg.jpg"}/>
                    <About/>
                    <Achievement/>
                    <Features/>
                    <Quote/>
                    <Services/>
                </main>
                <Footer/>
            </div>
        </>
    );
}

export default AboutPage;