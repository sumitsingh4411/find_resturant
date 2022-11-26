import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, } from 'react-router-dom'
import ProtectedRoute from '../common/ProtectedRoute'
import { URLPaths } from '../common/constant'
import Login from '../pages/auth/Login'
import BookMark from '../pages/bookmark/BookMark'
import Dashboard from '../pages/dashboard/Dashboard'


function AllRoutes() {
    const auth = useSelector((state) => state.auth);
    return (
        <Routes>

            <Route path={URLPaths.LOGIN} element={
                auth?.username && auth?.password ?
                    <Navigate to={URLPaths.DASHBOARD} />
                    : <Login />
            } />

            <Route path={URLPaths.DASHBOARD}
                element={<ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>} />

            <Route path={URLPaths.BOOKMARK}
                element={<ProtectedRoute>
                    <BookMark />
                </ProtectedRoute>} />

            <Route path="*" element={<div>404</div>} />
        </Routes>
    )
}

export default AllRoutes