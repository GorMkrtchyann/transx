import React from 'react';
import {Banner} from "../../components/banner";
import About from "./About";
import Achievement from "./Achievement";
import Features from "./Features";
import Quote from "./Quote";
import Services from "./Services";
import {Footer} from "../../components/footer";

export const AboutPage = () => {

    return (
        <div className="page-wrapper">
            <main className="main">
                <Banner title={'About Us'} img={"img/about_bg.jpg"}/>
                <About/>
                <Achievement/>
                <Features/>
                <Quote/>
                <Services/>
            </main>
            <footer className="page-footer"><img className="section--bg b0 r0" src="img/footer-bg.png" alt="bg"/>
                <Footer/>
            </footer>
        </div>
    );
}

export default AboutPage;