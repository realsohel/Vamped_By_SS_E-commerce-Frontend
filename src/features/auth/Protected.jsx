import React from 'react'
import { useSelector } from 'react-redux';
import { selectloggedInUser } from './authSlice';
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
    const user = useSelector(selectloggedInUser);

    if(!user)
        return <Navigate to="/login" replace={true}/>

    return children;
}

export default Protected
