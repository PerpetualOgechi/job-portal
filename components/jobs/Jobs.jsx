import React from 'react'
import { jobType } from './constants/Constants'
import Link from 'next/link'
import "./Jobs.css"

const Jobs = () => {
    const categories = [
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },
        {
            companyName: "Foodmandu",
            location: "Kathmandu, Nepal",
            title: "Frontend Developer",
            type: "Fulltime",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.",
            nrs: 25000,

        },

    ]
    return (
        <div className='pt-36 pb-10 px-5 md:px-32 overflow-x-hidden'>
            <div className='flex flex-col px-5 gap-10 '>
                <h1 className='font-medium text-[25px] text-center sb:text-[40px]'>Discover More than <span className='text-[#10B981]'>5000+ Jobs</span></h1>
                <div className='px-16 flex flex-col'>
                    <div className='flex flex-col items-center pb-5 gap-5 sb:flex-row justify-between w-full '>
                        <div className='border-4 px-5 flex text-center py-1.5 border-black rounded-2xl'>
                            <img src="dark-search-icon.svg" sizes={20} alt="" />
                            <input type="text"
                                placeholder='Enter job title, keyword'
                                className='px-5 py-0'
                            />
                        </div>
                        <div className='border-4 px-5 py-2 flex text-center border-black rounded-2xl'>
                            <img src="dark-location-icon.svg" sizes={30} alt="" />
                            <input type="text"
                                placeholder='Location country, city, state'
                                className='px-5 py-0'

                            />
                        </div>
                        <button className='bg-[#10B981] px-12 py-5 text-[20px] text-white rounded-2xl'>Search</button>
                    </div>
                    <p>Popular searches: Frontend Developer, FullStack Devloper</p>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row pt-20'>
                <div className='w-full md:w-[30%] md:flex md:flex-col gap-10'
                >
                    <div className='flex justify-between md:flex-col'>
                        <div className='flex flex-col gap-5' >
                            <label htmlFor=""
                                className='font-bold text-[20px]'
                            >Job Type</label>

                            <div className='flex flex-col gap-5'>
                                {
                                    jobType.map(type => {
                                        const { name, value } = type
                                        return (
                                            <div className='flex gap-5'>
                                                {/* <option className='bg-none' value={value}>{name}</option> */}
                                                <input type="checkbox" />
                                                <label htmlFor="">{name}</label>
                                            </div>

                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className='flex flex-col gap-5' >
                            <label htmlFor=""
                                className='font-bold text-[20px]'
                            >Job Categories</label>

                            <div className='flex flex-col gap-5'>
                                {
                                    jobType.map(type => {
                                        const { name, value } = type
                                        return (
                                            <div className='flex gap-5'>
                                                {/* <option className='bg-none' value={value}>{name}</option> */}
                                                <input type="checkbox" />
                                                <label htmlFor="">{name}</label>
                                            </div>

                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col gap-5' >
                        <label htmlFor=""
                            className='font-bold text-[20px]'
                        >Job Level</label>

                        <div className='flex flex-col gap-5'>
                            {
                                jobType.map(type => {
                                    const { name, value } = type
                                    return (
                                        <div className='flex gap-5'>
                                            {/* <option className='bg-none' value={value}>{name}</option> */}
                                            <input type="checkbox" />
                                            <label htmlFor="">{name}</label>
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className='flex flex-col gap-5' >
                        <label htmlFor=""
                            className='font-bold text-[20px]'
                        >Salary Range</label>

                        <div className='flex flex-col gap-5'>
                            {
                                jobType.map(type => {
                                    const { name, value } = type
                                    return (
                                        <div className='flex gap-5'>
                                            {/* <option className='bg-none' value={value}>{name}</option> */}
                                            <input type="checkbox" />
                                            <label htmlFor="">{name}</label>
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className='w-full md:flex-1'>
                    <div className='flex justify-between p-5'>
                        <div>
                            <h1>All Jobs</h1>
                            <p>Showing 22 results</p>
                        </div>
                        <div>
                            <h1>Sort by: <span>Most relevant</span></h1>
                        </div>
                    </div>
                    <div className='px-5 flex flex-col gap-5'

                    >
                        {
                            categories.map(category => {
                                const { companyName, type, title, location, nrs, desc } = category
                                return (
                                    <Link href="" className='bg-white rounded-xl py-5 px-5 flex flex-col gap-5 justify-center border-2 border-black job'>
                                        <div className='md:flex gap-5 '>
                                            <div className=''>
                                                <img src="grey-dot.svg" alt="" />
                                            </div>
                                            <div className='w-full'>
                                                <div className='w-full '>
                                                    <div className='flex justify-between '>

                                                        <h1 className='text-[18px] md:text-[25px] font-medium text-[#3b3b3b]'>{title}</h1>


                                                        <div className='flex flex-col justify-center items-center'>
                                                            <img src="Bookmark border.svg" sizes={10} alt="" />
                                                            <p>save</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='w-full  flex  flex-col md:flex-row justify-between items-center'>
                                                    <div className='flex gap-10'>
                                                        <div>
                                                            <p>{companyName}</p>
                                                            <p>{type}</p>
                                                        </div>
                                                        <div className='flex '>

                                                            <p>{location}</p>
                                                        </div>
                                                    </div>



                                                    <Link href="" className='bg-[#10B981] text-[#fff] py-3 px-10 rounded-xl'>Apply Now</Link>

                                                </div>

                                            </div>
                                        </div>

                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs