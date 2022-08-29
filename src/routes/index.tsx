import { ReactElement, Suspense } from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import { ForgotPassword, Home, Landing, Login, ResetPassword } from '../pages'

export default function Routes(): ReactElement {

    return (
        <BrowserRouter>
            <Suspense fallback={<div>loading....</div>} >
                <Switch>
                    {/* área pública */}
                    <Route path='/landing' element={<Landing />} />
                    {/* acesso a área privada */}
                    <Route path='/login' element={<Login />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/reset-password' element={<ResetPassword />} />
                    {/* área privada */}
                    <Route
                        path='/'
                        element={
                            <ProtectedRoute validation={true} ><Home /></ProtectedRoute>
                        }
                    />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}