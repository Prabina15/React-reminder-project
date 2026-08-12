import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Homepage from './pages/HomePage'
import UpcomingPage from './pages/UpcomingPage'
import AddPage from './pages/AddPage'
import Editpage from './pages/EditPage'
import MainLayout from './layouts/MainLayout'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Homepage />} />
                <Route path='/upcoming' element={<UpcomingPage />}/>
                <Route path='/add' element={<AddPage />}/>
                <Route path='/edit/:id' element={<Editpage />}/>
            </Route>
        </Routes>      
        </BrowserRouter>
    </div>
  )
}

export default Router
