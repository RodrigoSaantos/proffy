import React, {InputHTMLAttributes} from 'react'

import './style.css'

interface Inputprops extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;

}

const Input:React.FC<Inputprops> = ({label, name, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>

    );
};

export default Input;