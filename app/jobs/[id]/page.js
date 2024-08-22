"use client"
import Footer from '@/components/footer/Footer'
import JobDetails from '@/components/jobDetails/JobDetails'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'


const page = () => {
  return (
    <div>
      <Navbar />
      <JobDetails />
      <Footer />
    </div>
  )
}

export default page