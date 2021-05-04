import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = ({ children, isPrimary, isInfo, isSuccess }) => {
    let myClasses = "button ";
    if(isPrimary) {
        myClasses += "is-primary "
    }
    if(isInfo) {
        myClasses += "is-info "
    }
    if(isSuccess){
        myClasses += "is-success"
    }
    return (
        <div>
            <button className={myClasses}>{children}</button>
        </div>

    )
};

export default CoolButton;