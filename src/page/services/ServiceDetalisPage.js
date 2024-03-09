import React from 'react'
import { Banner } from '../../components/banner'
import serviceDetalisImg from '../../assets/img/services/service-details.jpg'
import { Freight } from '../../components/Freight'
export const ServiceDetalisPage = () => {
  return (
    <>
      <div class="page-wrapper">
        <main class="main">
          <Banner title={'Service detalis'} img={serviceDetalisImg} />
         <Freight/>
        </main>
      </div>
    </>
  )
}
