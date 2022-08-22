import React, { useEffect, useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import axiosInstance from '../../configs/axios'
import './ActivityForum.scss'


const ActivityForm = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    // const login = () => {
    //     axiosInstance.post('auth/signin', {
    //         username: 'test',
    //         password: '12345',
    //         email: 'lnwza@gmail.com'
    //     }).then(() => console.log('login success')).catch(() => console.log('login failed'))
    // }
    // const onSubmit = data => {
    //     axiosInstance.post('user/activities', { data })
    //         .then(() => {
    //             console.log(data);
    //             reset();
    //         })
    // }
    // useEffect(() => {
    //     login()

    // }, []);


    // const isEdit = false- ไว้เขียน params c้heck เอา
    return (
        <div className='box'>
            <div className='acivityform-container'>
                <h1>New Activity</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <label for="activity_type">Activity Type</label><br /> */}
                    <select {...register("activity_type", { required: true })}>
                        <option value="">Activity Type</option>
                        <option value="cardio">cardio</option>
                        <option value="weight training">weight training</option>
                    </select>
                    {errors.activity_type && <p className='error'>Please choose your activity types</p>}
                    <br />
                    {/* <label for="activity_name">Activity Name</label><br /> */}
                    <select {...register(("activity_name"))}>
                        <option value="">Activity Name</option>
                        <option value="run">Run</option>
                        <option value="bicycle">bicycle</option>
                        <option value="ride">ride</option>
                        <option value="swim">swim</option>
                        <option value="walk">walk</option>
                        <option value="hike">hike</option>
                        <option value="strength training">strength training</option>
                    </select>
                    {errors.activity_name && <p className='error'>Please choose your activity</p>}
                    <br />
                    {/* <label for="date">Date</label><br /> */}
                    <input type="date" {...register("date", { required: true })} />
                    {errors.date && <p className='error'>Please enter the date</p>}
                    <br />
                    {/* <label for="duration">Duration</label><br /> */}
                    <input type="number" placeholder='duration(minutes)'  {...register("duration", { min: { value: 0, message: "duration can't be zero" } })} />
                    <p className='error'>{errors.duration?.message}</p>
                    {/* <br/> */}
                    {/* <label for="comment">Description</label><br /> */}
                    <textarea placeholder='Comment' {...register("comment")}></textarea>
                    <br />
                    <button>Add Activity</button>
                </form>
            </div>
        </div>
    )
}
export default ActivityForm;