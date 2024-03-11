// CalculatorForm.js
import { useState } from "react";
import { useSelector } from "react-redux";
import { CalculatorInput } from "./Calculatorinput"; // изменено на с большой буквы "I" в имени файла
import AddIcon from "@mui/icons-material/Add";
import { addForm } from '../store/Calculatorstore';
import { useDispatch } from 'react-redux';

export const CalculatorForm = () => {
    const dispatch = useDispatch()
    const forms = useSelector((state) => state.calculator);
    const [userData, setUserData] = useState({
        name: "",
        tel: "",
        email: "",
    });

    return (
        <form className="form calculator-form" action="#">
            <h5 className="calculator-form__title">Calculation form</h5>
            <div className="row bottom-30 pl-3 pr-3">
                {forms.map((element, index) => (
                    <CalculatorInput key={element.id} index={index} length={forms.length} element={element} />

                ))}
                <div className="w-100">
                    <div className="row ">
                        {["name", "tel", "email"].map((name, index) => (
                            <div key={name} className="col-sm-6 col-md-3">
                                <input
                                    className="form__field"
                                    type={name === "tel" ? "tel" : "text"}
                                    pattern={name === "name" ? "[A-Za-z]+" : name === "tel" ? "^+[0-9]+" : undefined}
                                    minLength={3}
                                    name={name}
                                    placeholder={name === "name" ? "Your name" : name === "tel" ? "+374-XX-XX-XX" : "Transx@mail.ru"}
                                    onChange={(e) => setUserData(prevUserData => ({ ...prevUserData, [name]: e.target.value }))}
                                    value={userData[name]}
                                    required
                                />
                            </div>
                        ))}
                        <div className={`col-sm-6 col-md-3 `} onClick={() => { dispatch(addForm()) }}>
                            <span className={`form__field form__button d-flex justify-content-center align-items-center ${forms.length === 5 ? "not-allowed" : ""}`}>
                                <AddIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 top-20">
                    <button
                        className="button button--green form__button"
                        type="button"
                    >
                        <span>Send a Request</span>
                        <svg class="icon">
                            <use xlinkHref="#arrow"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    );
};
