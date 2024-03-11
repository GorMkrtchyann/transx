import React from 'react'
import { Banner } from '../../components/banner'
import serviceDetalisImg from '../../assets/images/services/service-details.jpg'
import { Freight } from '../../components/Freight'
import Footer from '../../components/footer'

export const ServiceDetalisPage = () => {
  return (
    <>
      <div className="page-wrapper">
        <main className="main">
          <Banner title={'Service detalis'} img={serviceDetalisImg} />
          <Freight />
        </main>
        <Footer />

      </div>
    </>
  )
}
