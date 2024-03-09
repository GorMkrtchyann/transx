import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../../assets/style/calculator.scss"

const QuoteTrack = (props) => {
    const [form, setForm] = useState({
        origin: "",
        delivery: "",
        service: "",
        weight: "",
        height: "",
        width: "",
        length: "",
        name: "",
        tel: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log(form)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setForm({
            origin: "",
            delivery: "",
            service: "",
            weight: "",
            height: "",
            width: "",
            length: "",
            name: "",
            tel: "",
            email: ""
        });
    };

    return (
        <section className="section qoute-section bg--lgray pb-0">
            <div className="quote-section__bg"><img className="img--bg" src="img/quote-bg.jpg" alt="bg"/></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 d-flex flex-column justify-content-between">
                        <div className="heading heading--white"><span className="heading__pre-title">Quote</span>
                            <h3 className="heading__title">Provide quick Tracking your cargo</h3><span
                                className="heading__layout layout--white">Quote</span>
                            <p className="heading__text color--white">Rockling Devario deep sea bonefish cutthroat
                                trout streamer fish kaluga sailback scorpionfish sand dab, turkeyfish golden loach
                                sand diver.</p>
                        </div>
                        <div className="contact-trigger top-50 top-lg-0"><img className="contact-trigger__img"
                                                                              src="img/contact_background.png"
                                                                              alt="img"/>
                            <h4 className="contact-trigger__title">How we can help you!</h4><Link
                                className="button button--white" to="#"><span>Contact us</span>
                                <svg className="icon">
                                    <use xlinkHref="#arrow"></use>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 top-50 top-lg-0">
                        <div className="form-wrapper">
                            <form className="form calculator-form" action="#" onSubmit={handleSubmit}>
                                <h5 className="calculator-form__title">Make a request</h5>
                                <div className="row bottom-5 pl-3 pr-3">
                                    <div>
                                        <div className="row bottom-5">
                                            <div className="col-sm-4">
                                                <select className="form__select nice-select " name="origin" value={form.origin} onChange={handleChange} required>
                                                    <option value="">Country of origin </option>
                                                    <option value="value 1">Value 1</option>
                                                    <option value="value 2">Value 2</option>
                                                    <option value="value 3">Value 3</option>
                                                    <option value="value 4">Value 4</option>
                                                    <option value="value 5">Value 5</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <select className="form__select nice-select" name="delivery" value={form.delivery} onChange={handleChange} required>
                                                    <option value="">Country of delivery </option>
                                                    <option value="value 1">Value 1</option>
                                                    <option value="value 2">Value 2</option>
                                                    <option value="value3">Value 3</option>
                                                    <option value="value4">Value 4</option>
                                                    <option value="value5">Value 5</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <select className="form__select nice-select" name={"service"} value={form.service} onChange={handleChange} required>
                                                    <option value="">Type of service </option>
                                                    <option value="value 1">Value 1</option>
                                                    <option value="value 2">Value 2</option>
                                                    <option value="value 3">Value 3</option>
                                                    <option value="value 4">Value 4</option>
                                                    <option value="value 5">Value 5</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <input className="form__field" type="number" placeholder="Weight (kg)" name={"weight"} value={form.weight} onChange={handleChange} required />
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <input className="form__field" type="number" name="height" placeholder="Height (cm)" value={form.height} onChange={handleChange} required />
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <input className="form__field" type="number" name="width" placeholder="Width (cm)" value={form.width} onChange={handleChange} required />
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <input className="form__field" type="number" name="length" placeholder="Lenght (cm)" value={form.length} onChange={handleChange} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <div className='row '>


                                            <div className="col-sm-6 col-md-4">
                                                <input className="form__field" type="text" pattern="[A-Za-z]+" minLength={3} name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <input className="form__field" type="tel" pattern="^\+[0-9]+" minLength={3} name="tel" placeholder="+37494739446" value={form.tel} onChange={handleChange} required />
                                            </div>

                                            <div className="col-sm-6 col-md-4">
                                                <input className="form__field" type="email" minLength={3} name="email" placeholder="Transx@mail.ru" value={form.email} onChange={handleChange} required />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row mb-5">
                                    <div className="col-12 top-20">
                                        <button className="button button--green form__button" type="submit"><span>Send a request</span>
                                            <svg className="icon">
                                                <use xlinkHref="#arrow"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuoteTrack;