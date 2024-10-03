import SignUp from '@/components/authentications/SignUp'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
      <SignUp />
      <Footer />
    </div>
  )
}

export default page
