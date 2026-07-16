import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <Header />
        <section className= "container mx-auto py-24 px-6">
            <Outlet />
        </section>
        

    </>
  )
}

export default MainLayout