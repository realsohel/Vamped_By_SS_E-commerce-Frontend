import React, { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCartAsync, selectCart, upadteCartAsync } from './cartSlice'

const Cart = () => {

    const items = useSelector(selectCart);    
    const dispatch = useDispatch();
    const [open, setOpen] = useState(true)

    const totalAmount = items.reduce((amount,item)=>item.price*item.quantity + amount,0);
    const totalItems = items.reduce((total,item)=>item.quantity + total,0);

    const handleQuantity=(e,item)=>{
        dispatch(upadteCartAsync({...item, quantity:+e.target.value}));
    }

    const handleDeleteItem=(e,id)=>{
        dispatch(deleteItemFromCartAsync(id));
    }

    return (
        <>
        <div className="mx-auto max-w-5xl bg-white px-4 sm:px-6 lg:px-16 border my-8 rounded-lg  shadow-lg">
            <h1 className="text-4xl my-2 font-bold tracking-tight text-gray-900">Your Cart</h1>
            <hr className='my-1' />
            <div className="mt-8">
                <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                    <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="h-full w-full object-cover object-center"
                        />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <a href={item.href}>{item.title}</a>
                            </h3>
                            <p className="ml-4"> $ {item.price * item.quantity}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500 ">Qty 
                                <select className='mx-2 py-0' onChange={(e)=>handleQuantity(e,item)} value={item.quantity}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={(e)=>handleDeleteItem(e,item.id)}
                            >
                                Remove
                            </button>
                            </div>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-0 mt-2">
                <div className="flex my-1 justify-between text-base font-medium text-gray-900">
                    <p>Total items in the cart</p>
                    <p>{totalItems} items</p>
                </div>
                <div className="flex my-1 justify-between text-base font-medium text-gray-900">
                    <p>Subtotal Amount</p>
                    <p>$ {totalAmount}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <Link 
                    to="/checkout"
                    
                    className="flex items-center justify-center rounded-md border border-transparent my-2 md:mx-auto  md:w-1/2 bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                    Checkout
                    </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                    or{' '}
                    <Link to='/'>
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </Link>
                    </p>
                </div>
            </div>
        </div>
        </>

    )
}

export default Cart
