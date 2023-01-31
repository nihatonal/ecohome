import React from 'react';
import { BsCheck } from "react-icons/bs";
import './RadioButton.css'
function RadioButton(props) {
    const { value, id, name, handleChange, checked } = props
    return (
        <div className={`radio-wrapper ${props.className}`} >
            <label htmlFor={id} className='check-button'
                style={checked ? { backgroundColor: '#fff' } : null}>
                <input
                    type='radio'
                    id={id}
                    value={value}
                    name={name}
                    onChange={handleChange}
                    checked={checked}
                />
                <span className={checked ? "checked" : ""}><BsCheck /></span>
            </label>
        </div>
    );
}

export default RadioButton;