import React from 'react'
import { CalculatorIinput } from './Calculatorinput.js'
import AddIcon from '@mui/icons-material/Add';
import  { useState } from 'react'

export const CalculatorForm = () => {
    const [form, setForm] = useState([{
        origin: "",
        dealyvery: "",
        service: "",
        weight: "",
        height: "",
        width: "",
        length: ""
    }])

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
        <form className="form calculator-form" action="#">
            <h5 className="calculator-form__title">Calculation form</h5>
            <div className="row bottom-30 pl-3 pr-3">
                {form.map((e, i) => {
                    return <CalculatorIinput key={i} i={i} e={e} form={form} setForm={setForm} />
                })}
                <div className='w-100'>
                    <div className='row '>

                        <div className="col-sm-6 col-md-3">
                            <input className="form__field" type="text" pattern="[A-Za-z]+" minLength={3} name="name" placeholder="Your name" required />
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <input className="form__field" type="tel" pattern="^\+[0-9]+" minLength={3} name="tel" placeholder="+37494739446" required />
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <input className="form__field" type="email" minLength={3} name="email" placeholder="Transx@mail.ru" required />
                        </div>
                        <div className="col-sm-6 col-md-3" onClick={() => { handleForm() }} >
                            <span className='form__field form__button d-flex justify-content-center align-items-center'>
                                <AddIcon />
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row mb-5">
                <div className="col-12 top-20">
                    <button className="button button--green form__button  " type="submit"><span>Send a request</span>
                        <svg className="icon">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    )
}
