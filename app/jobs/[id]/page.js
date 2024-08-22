"use client"
import JobDetails from '@/components/jobDetails/jobDetails'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { useParams } from 'next/navigation';

const page = () => {
  const { id } = useParams()
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div>
      <Navbar />
      <JobDetails />
    </div>
  )
}

export default page