
import carImg from '../../assets/img/car_1.png'
import calculatorImg from '../../assets/img/calculator.jpg'
import '../../assets/style/calculyator.scss'
import { Banner } from "../../components/banner";
import Footer from "../../components/footer";
import { CalculatorForm } from '../../components/Calculatorform';


export const Calculator = () => {


    return (
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
            <footer className="page-footer"><img className="section--bg b0 r0" src="img/footer-bg.png" alt="bg" />
                <Footer />
            </footer>
        </div>)
}

