import {Banner} from "../../components/banner";
import {OfficeDetails} from "./officeDetails";
import {useForm} from "react-hook-form";
import {Alert} from "@mui/material";
import {Footer} from "../../components/footer";
import React from "react";


export const ContactUs = () => {
    const {handleSubmit, register} = useForm()

    const Submit = (data) => {
        console.log(data)
    }

    return(
        <div className="page-wrapper">
            <main className="main">
                <Banner title={'Contact Us'} img={'https://demo.artureanec.com/html/transx/img/service-details.jpg'}/>
                <section className="section contacts pb-0">
                    <img className="contacts__bg" src="https://demo.artureanec.com/html/transx/img/contacts-map.png" alt="map"/>
                    <div className="container">
                        <div className="contactus__details">
                            <div>
                                <OfficeDetails
                                    title={'Office United States'}
                                    phones={['+2 262 890 8002', '+2 262 890 8002']}
                                    email={'transporteriumus@gmail.com'}
                                    address={'2307  Brooklyn, New York, United States'}
                                    socialsMedia={{
                                        facebook: '#',
                                        x: '#',
                                        linkedin: '#',
                                    }}
                                />
                            </div>
                            <div>
                                <OfficeDetails
                                    title={'Office United States'}
                                    phones={['+2 262 890 8002', '+2 262 890 8002']}
                                    email={'transporteriumus@gmail.com'}
                                    address={'2307  Brooklyn, New York, United States'}
                                    socialsMedia={{
                                        facebook: '#',
                                        x: '#',
                                        linkedin: '#',
                                    }}
                                />
                            </div>
                            <div>
                                <OfficeDetails
                                    title={'Office United States'}
                                    phones={['+2 262 890 8002', '+2 262 890 8002']}
                                    email={'transporteriumus@gmail.com'}
                                    address={'2307  Brooklyn, New York, United States'}
                                    socialsMedia={{
                                        facebook: '#',
                                        x: '#',
                                        linkedin: '#',
                                    }}
                                />
                            </div>
                            <div>
                                <OfficeDetails
                                    title={'Office United States'}
                                    phones={['+2 262 890 8002', '+2 262 890 8002']}
                                    email={'transporteriumus@gmail.com'}
                                    address={'2307  Brooklyn, New York, United States'}
                                    socialsMedia={{
                                        facebook: '#',
                                        x: '#',
                                        linkedin: '#',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-6">
                                <div className="contacts-map" id="map">

                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526.3714284066937!2d43.8421340388977!3d40.78432688157216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fb8b0079cb1b%3A0xa0ea444c25bac9bb!2z0J_Qu9C-0YnQsNC00Ywg0JLQsNGA0LTQsNC90LDQvdGG!5e0!3m2!1sru!2sam!4v1709889101935!5m2!1sru!2sam"
                                        width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy"
                                        title={'map'}
                                        referrerPolicy="no-referrer-when-downgrade"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form onSubmit={handleSubmit(Submit)} className="form contact-form" autoComplete="off">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="contact-form__subtitle">Send review</h5>
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form__field" type="text"
                                                   placeholder="Your Name"
                                                   {...register('name')}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form__field" type="email"
                                                   placeholder="Your Email"
                                                   {...register('email')}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form__field" type="tel"
                                                   placeholder="Your Phone"
                                                   {...register('phone')}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form__field" type="text"
                                                   placeholder="Subject"
                                                   {...register('subject')}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form__field form__message message--large"
                                                      placeholder="Text"
                                                      {...register('message')}
                                            />
                                        </div>
                                        <div className="col-12">
                                            {/*<Alert severity="success">*/}
                                            {/*    <strong>Well done!</strong> Your form has*/}
                                            {/*    been sent*/}
                                            {/*</Alert>*/}
                                            {/*<Alert severity="error">*/}
                                            {/*    <strong>Oh snap!</strong> Your form has not*/}
                                            {/*    been sent*/}
                                            {/*</Alert>*/}
                                        </div>
                                        <div className="col-12">
                                            <button className="button button--green" type="submit">
                                                <span>Send message</span>
                                                <svg className="icon">
                                                    <use xlinkHref="#arrow"/>
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
            <Footer/>
        </div>
    )
}