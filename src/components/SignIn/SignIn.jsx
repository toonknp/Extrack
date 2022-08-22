import React, { useEffect, useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import axiosInstance from '../../configs/axios'
import './SignIn.scss'


export const SignIn = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset();
    }
    return (
        <div>
            <div className="signinform-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Sign In</h2>
                    <input type="username" placeholder='username'{...register("usnername", { required: true })} />
                    {errors.username  && <p className='error'>Please enter username</p>}
                    <br/>
                    <input type="password" placeholder='password'{...register("password", { required: true })} />
                    {errors.password && <p className='error'>Please enter password</p>}
                    <br/>
                    <button>Sign In</button>
                    <h5>Don't have an account? <span>Sign up</span></h5>
                    </form>
                </div>

        </div>
    )
}

export default SignIn