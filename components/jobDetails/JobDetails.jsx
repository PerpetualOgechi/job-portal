import Link from 'next/link'
import React from 'react'

const JobDetails = () => {
    return (
        <div className='pt-36 flex px-20'>
            <div className='w-full'>
                <Link href={""} className='bg-white rounded-xl py-5 px-5 flex flex-col gap-5 justify-center border-2 border-[#60EEBF] job'>
                    <div className='flex gap-5 '>
                        <div>
                            <img src="grey-dot.svg" alt="" />
                        </div>
                        <div className='w-full'>
                            <div className='w-full '>
                                <div className='flex justify-between '>

                                    <h1 className='text-[25px] font-medium text-[#3b3b3b]'>{"title"}</h1>


                                    <div className='flex flex-col justify-center items-center'>
                                        <img src="Bookmark border.svg" sizes={10} alt="" />
                                        <p>save</p>
                                    </div>
                                </div>

                            </div>
                            <div className='w-full  flex justify-between items-center'>
                                <div className='flex flex-col gap-x-0.5'>
                                    <p>{"companyName"}</p>
                                    <div className='flex gap-10'>
                                        <p>{"type"}</p>
                                        <p>{"location"}</p>
                                    </div>
                                </div>



                                <Link href="" className='bg-[#10B981] text-[#fff] py-3 px-10 rounded-xl'>Apply Now</Link>

                            </div>

                        </div>
                    </div>

                </Link>
                <div>
                    <h1>Full stack web developer (React/node js)</h1>
                    <p>Basic Job Information</p>
                    <div>
                        <h1>Job category <span>: IT(Software)</span></h1>
                        <h1>Job level <span>: Senior (2+ years)</span></h1>
                        <h1>No. of vacancy <span>: [6]</span></h1>
                        <h1>Job type <span>: Full time</span></h1>
                        <h1>Location <span>: Kathmandu, Nepal</span></h1>
                        <h1>Offered salary <span>: $500/month (negotiable)</span></h1>
                        <h1>Apply before <span>: 11th Sept, 2022</span></h1>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='w-[40%]'></div>
        </div>
    )
}

export default JobDetails