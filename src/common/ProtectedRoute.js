import React from 'react'
import { Navigate } from 'react-router-dom'
import { URLPaths } from './constant'

export default function ProtectedRoute({
    children
}) {
    return (
        localStorage.getItem("user") ?
            children : <Navigate to={URLPaths.LOGIN} />
    )
}
