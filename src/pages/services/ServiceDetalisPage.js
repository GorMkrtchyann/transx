import React from 'react'
import { Banner } from '../../components/banner'
import serviceDetalisImg from '../../assets/images/services/service-details.jpg'
import { Freight } from '../../components/Freight'
import {Footer} from '../../components/footer'
import {Header} from "../../components/header";

export const ServiceDetalisPage = () => {
  return (
    <>
        <Header/>
        <div className="page-wrapper">
        <main className="main">
          <Banner title={'Service Details'} img={serviceDetalisImg} />
          <Freight />
        </main>
        <Footer />
      </div>
    </>
  )
}
