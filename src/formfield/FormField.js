import React from 'react';

function FormField({label, type, placeholder}) {
    return (
        <div>
            <div className='field'>
                <label className='label'>{label}</label>
                <input className="input" type={type} placeholder={placeholder}></input>
            </div>
        </div>
    );
};

export default FormField;