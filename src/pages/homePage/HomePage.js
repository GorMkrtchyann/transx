import React from 'react';
import Promo from "./Promo";
import TransportServices from "./TransportServices";
import Features from "../../components/Features";
import Services from "../../components/Services";
import Quote from "../../components/Quote";
import {Footer} from "../../components/footer"
import HomeAchievement from "./HomeAchievement";
import QuoteTrack from "./QuoteTrack";
import {Header} from "../../components/header";
import {Routes} from "react-router";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <Promo/>
                <TransportServices/>
                <Features/>
                <Services/>
                <Quote/>
                <HomeAchievement/>
                <QuoteTrack/>
                <Footer/>
            </main>
        </>

    );
}