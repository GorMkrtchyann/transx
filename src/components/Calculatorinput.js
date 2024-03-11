// CalculatorInput.js
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import MultipleSelectPlaceholder from "./select";
import { removeForm, updateForm } from "../store/Calculatorstore";

export const CalculatorInput = memo(({ element, index, length }) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateForm({ id: element.id, name, value }));
    };

    const handleClose = (id) => {
        dispatch(removeForm(id));
    };

    const select = [
        {
            name: "Country of origin",
            value: [
                "value 1",
                "value 2 ",
                "value 3",
                "value 4",
                "value 5",
                "value 6",
            ],
        },
        {
            name: "Type of delivery",
            value: [
                "value 1",
                "value 2 ",
                "value 3",
                "value 4",
                "value 5",
                "value 6",
            ],
        },
        {
            name: "Type of service",
            value: [
                "value 1",
                "value 2 ",
                "value 3",
                "value 4",
                "value 5",
                "value 6",
            ],
        },
    ];

    return (
        <div>
            <div className=" d-flex flex-wrap justify-content-between padding mb-1">
                <h6 className="calculator-form__title">Request {index + 1}</h6>
                {length >1  && <CloseIcon className="pointer" onClick={() => handleClose(element.id)} />}
            </div>
            <div className="row bottom-20" >
                <div className="col-sm-6 col-md-6">
                    <MultipleSelectPlaceholder
                        data={select[0]}
                        name={"origin"}
                        selectValue={element.origin}
                        handleChange={handleChange}
                    />
                </div>
                <div className="col-sm-6 col-md-6">
                    <MultipleSelectPlaceholder
                        data={select[1]}
                        name={"delivery"}
                        selectValue={element.delivery}
                        handleChange={handleChange}
                    />
                </div>
                <div className="col-sm-12 col-md-12">
                    <MultipleSelectPlaceholder
                        data={select[2]}
                        name={"service"}
                        selectValue={element.service}
                        handleChange={handleChange}
                    />
                </div>
                <div className="col-sm-6 col-md-3">
                    <input
                        className="form__field"
                        type="number"
                        value={element.weight}
                        name="weight"
                        onChange={(e) => handleChange(e)}
                        placeholder="Weight (cm)"
                        required
                    />
                </div>
                <div className="col-sm-6 col-md-3">
                    <input
                        className="form__field"
                        type="number"
                        value={element.height}
                        name="height"
                        onChange={(e) => handleChange(e)}
                        placeholder="Height (cm)"
                        required
                    />
                </div>
                <div className="col-sm-6 col-md-3">
                    <input
                        className="form__field"
                        type="number"
                        value={element.width}
                        name="width"
                        onChange={(e) => handleChange(e)}
                        placeholder="Width (cm)"
                        required
                    />
                </div>
                <div className="col-sm-6 col-md-3">
                    <input
                        className="form__field"
                        type="number"
                        value={element.length}
                        name="length"
                        onChange={(e) => handleChange(e)}
                        placeholder="Length (cm)"
                        required
                    />
                </div>

            </div>
        </div>
    );
});
