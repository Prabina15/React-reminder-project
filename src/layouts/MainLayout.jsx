import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main className='max-w-3xl mx-auto'>
        <Header />
        <section className= "container mx-auto pt-32 sm:pt-24 pb-24 px-6">
            <Outlet />
        </section>
        

    </main>
  )
}

export default MainLayout