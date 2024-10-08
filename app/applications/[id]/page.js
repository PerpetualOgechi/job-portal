import Applications from '@/components/applications/Applications'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Applications />
      <Footer />
    </div>
  )
}

export default page