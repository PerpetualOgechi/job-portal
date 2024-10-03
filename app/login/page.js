import Login from '@/components/authentications/Login'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <Login />
        <Footer/>
    </div>
  )
}

export default page