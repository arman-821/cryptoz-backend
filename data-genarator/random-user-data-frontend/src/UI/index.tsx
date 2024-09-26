import React from 'react'
import Navbar from '../Components/Navbar'
import { RouteProvider } from '../Hooks/RouteManager'
import Footer from '../Components/Footer'
import '../App.css'
export default function MainLayout({children}:any) {
  return (
    <>
    <Navbar/>
    <div className='min-h-[90vh] p-4 '>
        {children}

    </div>
    <Footer/>

        
    </>
  )
}
