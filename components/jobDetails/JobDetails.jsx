"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { categories } from '../jobs/constants/JobConstants';

const JobDetails = (context) => {
    const [data, setData] = useState([])
    const { id } = useParams()
    // const { id } = context.params;
    console.log(id)



    useEffect(() => {
        const getDataById = (id) => {
            // Assuming id is a string from useParams(), so we convert it to a number for comparison
            const result = categories.find(item => item.id === parseInt(id));
            return result ? result : null;
        }

        const result = getDataById(id);
        setData(result);
        console.log(result);
    }, [id, categories]);  // Dependencies: id and categories


    console.log(data)
    console.log(data.image)
    return (
        <div className='pt-36 flex px-3 md:px-20'>
            <div className='w-full  flex flex-col gap-5'>
                <Link href={""} className='bg-white rounded-xl py-5 px-5 flex flex-col gap-5 justify-center border-2 border-[#60EEBF] job'>
                    <div className='flex gap-5 '>
                        <div>
                            <img src={`/${data.image}`} alt={data.image} width={80} height={80} />
                        </div>
                        <div className='w-full'>
                            <div className='w-full '>
                                <div className='flex justify-between '>

                                    <div>
                                        <h1 className='text-[25px] font-medium text-[#3b3b3b]'>{data.companyName}</h1>
                                        <p>{data.companyService}</p>
                                    </div>


                                    <div className='flex flex-col justify-center items-center'>
                                        <img src="/bookmark-border.svg" sizes={10} alt="" />
                                        <p>save</p>
                                    </div>
                                </div>

                            </div>
                            <div className='w-full  flex justify-between items-center'>
                                <p>{data.totalJobs}</p>



                                <Link href="" className='bg-[#10B981] text-[#fff] py-3 px-10 rounded-xl'>Apply Now</Link>

                            </div>

                        </div>
                    </div>

                </Link>
                <div className='flex flex-col rounded-xl py-5 px-5  gap-3 border-2 border-[#60EEBF]'>
                    <h1 className='font-bold text-[25px]'>{data.title}</h1>
                    <p>Basic Job Information</p>
                    <div className='flex flex-col gap-3'>
                        <h1 className='flex gap-12'><span className='font-bold '>Job category </span><span>: IT(Software)</span></h1>
                        <h1 className='flex gap-20'><span className='font-bold '>Job level </span> <span>: Senior (2+ years)</span></h1>
                        <h1 className='flex gap-8'><span className='font-bold '>No. of vacancy </span><span>: [6]</span></h1>
                        <h1 className='flex gap-20'><span className='font-bold '>Job type </span><span>: Full time</span></h1>
                        <h1 className='flex gap-20'><span className='font-bold '>Location </span><span>: Kathmandu, Nepal</span></h1>
                        <h1 className='flex gap-9'><span className='font-bold '>Offered salary </span><span>: $500/month (negotiable)</span></h1>
                        <h1 className='flex gap-12'><span className='font-bold '>Apply before </span><span>: 11th Sept, 2022</span></h1>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='md:w-[40%]'></div>
        </div>
    )
}

export default JobDetails