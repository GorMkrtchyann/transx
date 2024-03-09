import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export const CalculatorIinput = ({ i, e, form, setForm }) => {
    function handleChange(e, i) {
        const { name, value } = e.target
        form[i][name] = value
        setForm([...form])
    }
    console.log(form)
    function handleClose(i) {
        console.log(i)
        console.log(form)
        const data = form.splice(i, 1)
        console.log(data)
        setForm([...form])
    }
    return (
        <div>
            <div className=" d-flex flex-wrap justify-content-between padding mb-1">
                <h6 className='calculator-form__title'>Request {i + 1}
                </h6>
                {i !== 0 && <CloseIcon onClick={() => handleClose(i)} />}
            </div>
            <div className="row bottom-20" value={e.value} key={i}>
                <div className="col-sm-6 col-md-6">
                    <select className="form__select nice-select " value={e.origin} name="origin" onChange={(e) => { handleChange(e, i,) }} required>
                        <option value="">Country of origin </option>
                        <option value="value 1">Value 1</option>
                        <option value="value 2">Value 2</option>
                        <option value="value 4">Value 3</option>
                        <option value="value 5">Value 4</option>
                        <option value="value 6">Value 5</option>
                    </select>
                </div>
                <div className="col-sm-6 col-md-6">
                    <select className="form__select nice-select" value={e.delivery} name="delivery" onChange={(e) => { handleChange(e, i,) }} required>
                        <option value="">Country of delivery </option>
                        <option value="value 1">Value 1</option>
                        <option value="value 2">Value 2</option>
                        <option value="value3">Value 3</option>
                        <option value="value4">Value 4</option>
                        <option value="value5">Value 5</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-12">
                    <select className="form__select nice-select" value={e.service} name="service" onChange={(e) => { handleChange(e, i,) }} required>
                        <option value="">Type of service </option>
                        <option value="value 1">Value 1</option>
                        <option value="value 2">Value 2</option>
                        <option value="value 3">Value 3</option>
                        <option value="value 4">Value 4</option>
                        <option value="value 5">Value 5</option>
                    </select>
                </div>
                <div className="col-sm-6 col-md-3">
                    <input className="form__field" type="number" value={e.weight} name="weight" onChange={(e) => { handleChange(e, i,) }} placeholder="Weight (kg)" required />
                </div>
                <div className="col-sm-6 col-md-3">
                    <input className="form__field" type="number" value={e.height} name="height" onChange={(e) => { handleChange(e, i,) }} placeholder="Height (cm)" required />
                </div>
                <div className="col-sm-6 col-md-3">
                    <input className="form__field" type="number" value={e.width} name="width" onChange={(e) => { handleChange(e, i,) }} placeholder="Width (cm)" required />
                </div>
                <div className="col-sm-6 col-md-3">
                    <input className="form__field" type="number" value={e.length} name="length" onChange={(e) => { handleChange(e, i,) }} placeholder="Lenght (cm)" required />
                </div>
            </div>
        </div>
    )
}

