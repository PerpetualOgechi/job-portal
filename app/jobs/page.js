import FeaturedJobs from '@/components/featuredJobs/FeaturedJobs'
import Jobs from '@/components/jobs/Jobs'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <Jobs />
        <FeaturedJobs title={"Recomended"}/>
    </div>
  )
}

export default page