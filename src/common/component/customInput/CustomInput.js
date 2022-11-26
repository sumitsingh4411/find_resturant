import React from 'react';
import style from "./CustomInput.module.scss";


function CustomInput({ label, placeholder, value, onChange, error, type, name }) {
    return (
        <div className={style.customInput}>
            <label className={style.customInput__label}>{label}</label>
            <input type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={style.input_field}
                name={name}
            />
            {
                error && <div className={style.customInput__error}>{error}</div>
            }
        </div>
    )
}

export default CustomInput