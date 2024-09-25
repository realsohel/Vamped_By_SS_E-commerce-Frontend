import React, { useEffect, useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

const SignUp = () => {

    const[formData,setFormData] = useState({
        username:"",
        email:"",
        password:"",
        confirm_password:""
    })

    const {username,email,password,confirm_password} = formData;
    // const navigate = useNavigate();

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(formData);
    }

    

    return (
        <div className=' w-full px-4 py-6 z-50 bg-blue-400 fixed'>
            <div className='max-w-[450px] my-4 h-[550px] mx-auto bg-black/75 text-white rounded-lg  '>
                <div className='mt-6  items-center  pt-10'>
                    <div className=' w-[450px] text-2xl font-semibold   my-4  mx-auto absolute top-1'>
                        <h2 className='text-center w-1/2 mx-auto p-4  tracking-widest bg-blue-300 text-black'>
                            SIGN UP
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} 
                        className='w-full flex flex-col pt-4' >   
                    
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none  '>
                        <span className=''>
                            <RxAvatar size={40} className='mx-2'/> 
                        </span>
                        <input
                            className='  mx-8 text-lg  tracking-wider bg-gray-700 focus:outline-none outline-none' 
                            type='text'
                            name='username'
                            value={username}
                            onChange={handleInputChange}
                            placeholder='Name'
                            autoComplete='username'
                            required
                    />
                    </div>

                    
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none '>
                        <span className=''>
                            <MdEmail size={40} className='mx-2'/> 
                        </span>
                        <input
                            className=' mx-8 text-lg  tracking-wider bg-gray-700 focus:outline-none'
                            type='email'
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                            placeholder='Email'
                            autoComplete='email'
                            required
                        />
                    </div>
                    
                    
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none  '>
                        <RiLockPasswordFill size={40} className='mx-2'/> 
                        <input
                            className=' mx-8 text-lg bg-gray-700 focus:outline-none'
                            value={password}
                            onChange={handleInputChange}
                            name='password'
                            type='password'
                            placeholder='Password'
                            autoComplete='password'
                            required
                        />
                    </div>
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none  '>
                        <RiLockPasswordFill size={40} className='mx-2'/> 
                        <input
                            className=' mx-8 text-lg bg-gray-700 focus:outline-none'
                            value={confirm_password}
                            onChange={handleInputChange}
                            name='confirm_password'
                            type='password'
                            placeholder='Confirm Password'
                            autoComplete='confirm password'
                            required
                        />
                    </div>
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