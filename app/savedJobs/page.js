import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className='flex mt-36 py-36 justify-center items-center font-bold text-[30px]'>No saved Job</div>
     

        <Footer/>
    </div>
  )
}

export default page