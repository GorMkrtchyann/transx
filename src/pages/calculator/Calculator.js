
import carImg from '../../assets/images/bg/car_1.png'
import calculatorImg from '../../assets/images/bg/calculator.jpg'
import '../../assets/style/calculator.scss'
import { Banner } from "../../components/banner";
import {Footer} from "../../components/footer";
import { CalculatorForm } from '../../components/Calculatorform';
import {Header} from "../../components/header";
import React from "react";

export const Calculator = () => {


    return (
        <>
            <Header/>
            <div className="page-wrapper">
            <main className="main">
                <Banner title={'Calculator'} img={calculatorImg} />
                <section className="section calculator">
                    <div className="container ">
                        <div className="row  gap">
                            <div className="col-lg-8">
                                <CalculatorForm />
                            </div>
                            <div className="col-lg-4 nice-select.wid flex-grow-3 row align-items-center">
                                <img src={carImg} alt='' />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
        </>
    )
}

