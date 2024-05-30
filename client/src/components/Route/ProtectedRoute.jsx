import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
    const { loading, isAuthenticated, user } = useSelector(state => state.user)

    return((loading === false) &&  (isAuthenticated === false) ? <Navigate to="/login" /> : children)
}

export default ProtectedRoute