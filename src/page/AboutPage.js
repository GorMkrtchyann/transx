import React from 'react';
import HeroBlock from "../components/HeroBlock";
import About from "../components/About";
import Achievement from "../components/Achievement";
import Features from "../components/Features";
import Quote from "../components/Quote";
import Services from "../components/Services";
import FooterComponent from "../components/FooterComponent";

function AboutPage(props) {

    return (
        <div className="page-wrapper">
            <main className="main">
                <HeroBlock/>
                <About/>
                <Achievement/>
                <Features/>
                <Quote/>
                <Services/>
            </main>
            <footer className="page-footer"><img className="section--bg b0 r0" src="img/footer-bg.png" alt="bg"/>
                <FooterComponent/>
            </footer>
        </div>
    );
}

export default AboutPage;