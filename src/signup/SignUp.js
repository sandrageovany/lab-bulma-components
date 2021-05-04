import React from 'react';
import Navbar from '../navbar/Navbar'
import CoolButton from '../coolbutton/CoolButton';
import FormField from '../formfield/FormField';

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <form >
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g Alex@Smith.com" />
            <FormField label="PAssword" type="pasword" placeholder="password should be 6 char" />
            <CoolButton isSubmit>Signup</CoolButton>
            </form>
           

        </div>


    )
}

export default SignUp;