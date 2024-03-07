import React from 'react'

function CalculatorForm({ i, e, form, setForm }) {
    function handleChange(e, i) {
        const { name, value } = e.target
        form[i][name] = value
        setForm([...form])
    }

    return (
        <div className="row bottom-20" value={e.value} key={i}><div className="col-sm-4">
            <select className="form__select nice-select " name="origin" onChange={(e) => { handleChange(e, i,) }}>
                <option data-display=" Country of origin">Country of origin </option>
                <option value="value">Value 1</option>
                <option value="value2">Value 2</option>
                <option value="value3">Value 3</option>
                <option value="value3">Value 4</option>
                <option value="value3">Value 5</option>
            </select>
        </div>
            <div className="col-sm-4">
                <select className="form__select nice-select" value={e.value} name="delivery" onChange={(e) => { handleChange(e, i,) }}>
                    <option data-display="Country of delivery">Country of delivery </option>
                    <option value="value">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                    <option value="value3">Value 4</option>
                    <option value="value3">Value 5</option>
                </select>
            </div>
            <div className="col-sm-4">
                <select className="form__select nice-select" value={e.value} name="service" onChange={(e) => { handleChange(e, i,) }}>
                    <option data-display="Type of service">Type of service </option>
                    <option value="value">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                    <option value="value3">Value 4</option>
                    <option value="value3">Value 5</option>
                </select>
            </div>
            <div className="col-sm-6 col-md-3">
                <input className="form__field" type="number" value={e.weight} name="weight" onChange={(e) => { handleChange(e, i,) }} placeholder="Weight (kg)" />
            </div>
            <div className="col-sm-6 col-md-3">
                <input className="form__field" type="number" value={e.height} name="height" onChange={(e) => { handleChange(e, i,) }} placeholder="Height (cm)" />
            </div>
            <div className="col-sm-6 col-md-3">
                <input className="form__field" type="number" value={e.width} name="width" onChange={(e) => { handleChange(e, i,) }} placeholder="Width (cm)" />
            </div>
            <div className="col-sm-6 col-md-3">
                <input className="form__field" type="number" value={e.length} name="lenght" onChange={(e) => { handleChange(e, i,) }} placeholder="Lenght (cm)" />
            </div></div>
    )
}

export default CalculatorForm