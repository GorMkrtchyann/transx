import React from 'react';
import {Banner} from "../../components/banner";
import About from "../../components/About";
import Achievement from "../../components/Achievement";
import Features from "../../components/Features";
import Quote from "../../components/Quote";
import Services from "../../components/Services";
import Footer from "../../components/footer";

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