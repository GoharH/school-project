import React from "react"
import './style.scss'
const CustomInput = ({ label, error, errorText, name, value, onChange, type = 'text', disabled }) => {

    const handleChange = (e) => {
        onChange(e)   //  e =>
    }

    return <div>
        <label>
            {label ? <p className="G-input-title input-title" >{label}</p> : null}
            <input type={type} value={value} name={name} onChange={handleChange} disabled={disabled} />
            {error ? <p className="G-error-text">{errorText}</p> : null}
        </label>
    </div>
}
export default CustomInput