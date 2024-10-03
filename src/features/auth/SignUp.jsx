import React, { useEffect, useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAsync, selectloggedInUser } from './authSlice';

const SignUp = () => {

    const dispatch = useDispatch();
    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    const user = useSelector(selectloggedInUser);
    console.log(user)


    // const navigate = useNavigate();


    console.log(errors)

    return (
        <div className=' w-full px-4 py-6 z-50 bg-blue-400 fixed'>
            {user && <Navigate to="/" replace={true}/>}
            <div className='max-w-[450px] my-4 h-[550px] mx-auto bg-black/75 text-white rounded-lg  '>
                <div className='mt-6  items-center  pt-10'>
                    <div className=' w-[450px] text-2xl font-semibold   my-4  mx-auto absolute top-1'>
                        <h2 className='text-center w-1/2 mx-auto p-4  tracking-widest bg-blue-300 text-black'>
                            SIGN UP
                        </h2>
                    </div>

                    <form  onSubmit={handleSubmit((data)=>{
                        console.log(data);
                        dispatch(createUserAsync({username:data.username, email:data.email, password:data.password}))
                    })} 
                        className='w-full flex flex-col pt-4' >   
                    
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none  '>
                        <span className=''>
                            <RxAvatar size={40} className='mx-2'/> 
                        </span>
                        <input
                            id='username'
                            className='  mx-8 text-lg  tracking-wider bg-gray-700 focus:outline-none outline-none' 
                            type='text'
                            {...register("username", { required: "Username is required", maxLength: 20 })}
                            // value={username}
                            // onChange={handleInputChange}
                            placeholder='Name'
                        />
                    </div>
                    {errors.username && <p className='text-red-500 mx-auto p-2'>{errors.username.message}</p>}

                    
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none '>
                        <span className=''>
                            <MdEmail size={40} className='mx-2'/> 
                        </span>
                        <input
                            id='email'
                            className=' mx-8 text-lg  tracking-wider bg-gray-700 focus:outline-none'
                            type='email'
                            {...register("email", { required: "enter a valid email", maxLength: 50 })}
                            placeholder='Email'
                        />
                    </div>
                    {errors.email && <p className='text-red-500 mx-auto p-2'>{errors.email.message}</p>}
                    
                    
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none  '>
                        <RiLockPasswordFill size={40} className='mx-2'/> 
                        <input
                            id='password'
                            className=' mx-8 text-lg bg-gray-700 focus:outline-none'
                            {...register("password", { required: "password is required", maxLength: 20 })}
                            type='password'
                            placeholder='Password'
                        />
                    </div>
                        {errors.password && <p className='text-red-500 mx-auto p-2'>{errors.password.message}</p>}
                    
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none  '>
                        <RiLockPasswordFill size={40} className='mx-2'/> 
                        <input
                            id='confirmPassword'
                            className=' mx-8 text-lg bg-gray-700 focus:outline-none'
                            {...register("confirmPassword", { 
                                required: "Confirm password is not matching", maxLength: 20,
                                validate: (value,formValues) => value===formValues.password || 'Password not matching'
                            })}
                            type='password'
                            placeholder='Confirm Password'
                        />
                    </div>
                        {errors.confirmPassword && <p className='text-red-500 mx-auto p-2'>{errors.confirmPassword.message}</p>}
                    <button className=' bg-blue-300 hover:bg-blue-400 mx-14 rounded-md py-3 my-4  font-bold'>
                        Sign Up
                    </button>
                    <div className='mx-14 rounded-md flex justify-between items-center text-sm text-gray-600'>
                    <p>
                        <input className='mr-2' type='checkbox' />
                        Remember me
                    </p>
                    <p>Need Help?</p>
                    </div>
                    <p className='pt-3 text-center'>
                    <span className='text-gray-600 '>
                        Do not have an account ?
                    </span>{' '}
                    <span className='text-blue-300 hover:underline'>
                        <Link to='/login'>Login</Link>
                    </span>
                    </p>
                </form>
                    
                </div>

            </div>

            <div className='max-w-[300px] my-4 h-[20px] mx-auto  bg-black/50 shadow-lg blur-md px-32' >

            </div>
        </div>
    )
}

export default SignUp