"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from "@/store/MenuSlicer";

const Menus = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    useEffect(() => {
        dispatch(fetchMenu())
    }, [])

    console.log(data)
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
        <div className='bg-[#D9D9D9] py-10 pt-36 px-36'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-[35px]'>Featured
                    <span className='text-[#10B981]'> Jobs</span>
                </h1>
                <div className='flex gap-5 items-center'>
                    <h2 className='font-bold text-[25px]'>Show all jobs</h2>
                    <img src="Arrow 1.svg" alt="" className='w-[40px]' />
                </div>
            </div>

            <div className='px-5 '
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                    gridGap: "50px",
                    marginTop: "50px",


                }}
            >
                {
                    categories.map(category => {
                        const { companyName, type, title, location, nrs, desc } = category
                        return (
                            <div className='bg-white rounded-xl shadow-md py-5 px-5 flex flex-col gap-5 justify-center '>
                                <div className='flex gap-5 items-center'>
                                    <img src="dot.svg" alt="" />
                                    <div>
                                        <h1 className='text-[25px] font-medium text-[#3b3b3b]'>{companyName}</h1>
                                        <p>{location}</p>
                                    </div>
                                </div>
                                <div className='px-5 '>
                                    <div className='mb-5'>
                                        <h1 className='font-medium text-[24px]'>{title}</h1>
                                        <p>{type}</p>
                                    </div>
                                    <div className='mb-5'>
                                        <p className='text-[13px] font-medium'>{desc}</p>
                                        {/* <img src="Arrow 1.svg" alt="" className='w-[35px]' /> */}
                                    </div>
                                    <div className='flex font-medium text-[20px] justify-between'>
                                        <h2>NRs: {nrs}</h2>
                                        <Link href="" className='text-[#10B981]'>Apply Now</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menus