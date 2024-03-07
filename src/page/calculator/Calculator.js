import React, { useState } from 'react'
import calculatorImg from '../../assets/img/calculator.jpg';
import CalculatorForm from '../../components/Calculatorform.js';
import '../../assets/style/calculyator.scss'
import { Banner } from "../../components/banner";
import Footer from "../../components/footer";

export const Calculator = () => {
    const [form, setForm] = useState([{
        origin: "",
        dealyvery: "",
        service: "",
        weight: "",
        height: "",
        width: "",
        length: ""
    }])
console.log(form)
    function handleForm() {
        if (form.length < 5) {
            return setForm([...form, {
                origin: "",
                dealyvery: "",
                service: "",
                weight: "",
                height: "",
                width: "",
                length: ""
            }])
        }
    }

    return (
        <div className="page-wrapper">
            <main className="main">
                <Banner title={'Calculator'} img={calculatorImg} />
                <section className="section calculator">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <form className="form calculator-form" action="#">
                                    <h5 className="calculator-form__title">Calculation form</h5>
                                    <div className="row bottom-30 pl-3 pr-3">
                                        {form.map((e, i) => {
                                            return <CalculatorForm key={i} i={i} e={e} form={form} setForm={setForm} />
                                        })}
                                        <div className="row ">
                                            <div className="col-sm-6  col-md-3">
                                                <input className="form__field" type="text" pattern="[A-Za-z]+" minLength={3} name="name" placeholder="Your name" required />
                                            </div>
                                            <div className="col-sm-6  col-md-3">
                                                <input className="form__field" type="tel" pattern="^\+[0-9]+" minLength={3} name="tel" placeholder="+37494739446" required />
                                            </div>

                                            <div className="col-sm-6 col-md-3">
                                                <input className="form__field" type="email" minLength={3} name="email" placeholder="Transx@mail.ru" required />
                                            </div>
                                            <div className="col-sm-6  col-md-3">
                                                <div className="button button--green add__button" onClick={() => { handleForm() }}><span>Add New</span> </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-12 top-20">
                                            <button className="button button--green" type="submit"><span>Send a quote</span>
                                                <svg className="icon">
                                                    <symbol viewBox="0 0 150 78.6" id="arrow" xmlns="http://www.w3.org/2000/svg"><path d="M0 31.5h150v12.7H0V31.5zM112.8-.1l30.9 31.5-8.8 9L104 8.9l8.8-9zm18.1 51l-18.4 18.8 8.9 9 18.4-18.8-8.9-9z" /></symbol>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
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

