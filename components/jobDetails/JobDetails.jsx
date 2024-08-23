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
        <div className='pt-36 pb-10 flex gap-5 flex-col px-3 md:px-20 text-[#333333] md:flex-row md:gap-10'>
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
                    <h1 className='text-[30px]  md:text-[48px] font-medium text-[#333333]'>{data.title}</h1>
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
                <div className='flex flex-col rounded-xl py-5 px-5  gap-5 border-2 border-[#60EEBF]'>
                    <div>
                        <h1 className='text-[30px]  md:text-[48px] font-medium text-[#333333]'>Job description:</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant
                            fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.</p>
                    </div>
                    <div>
                        <h1 className='text-[30px]  md:text-[48px] font-medium text-[#333333]'>Requirements:</h1>
                        <ol>
                            <li>1. 1/2 years experience</li>
                            <li>2. Academic: Bachelor/High School</li>
                            <li>3. Expert in HTML, CSS JS</li>
                            <li>4. Experience with RDBMS</li>
                            <li>5. Integration of payment system</li>
                            <li>6. Should be able to work on bug fixing and maintain code quality</li>
                            <li>7. Good knowledge of modern UI/UX standards</li>
                        </ol>
                    </div>
                    <div>
                        <h1 className='text-[30px] md:text-[48px] font-medium text-[#333333]'>Other skills</h1>
                        <ol>
                            <li>1. Communication kills</li>
                            <li>2. +ve attitude</li>
                            <li>3. Curious to learn and adapt new technologies</li>
                            <li>4. Time management</li>
                            <li>5. Team work</li>
                            <li>6. Meeting client requirements</li>

                        </ol>
                    </div>
                    <div className='flex gap-10'>
                        <button className='bg-[#10B981] text-[#fff] py-3 px-10 rounded-xl'>Apply Now</button>
                        <button className='bg-[#e42121] text-[#fff] py-3 px-10 rounded-xl'>Apply Later</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 w-full md:w-[40%]'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[25px] md:text-[32px] font-medium text-[#333333]'>About Company</h1>
                    <p className='flex flex-col'><span>Foodmandu is the fastest, easiest and most convenient way to enjoy the best food of your favourite restaurants at home,
                        at the office or wherever you want to.</span><br />

                        <span>We know that your time is valuable and sometimes every minute in the day counts. That’s why we deliver! So you can spend more time doing the things you love.</span>

                    </p>
                    <Link href={""} className='text-[#10B981]'>Learn more</Link>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[25px] md:text-[32px] font-medium text-[#333333]'>Our Location</h1>
                    <img src="/location.svg" alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[25px] md:text-[32px] font-medium text-[#333333]'>Refer to a friend</h1>
                    <div className='flex gap-10'>
                        <img src="/facebook.svg" alt="" />
                        <img src="/linkedin.svg" alt="" />
                        <img src="/twitter.svg" alt="" />
                        <img src="/gmail.svg" alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[25px] md:text-[32px] font-medium text-[#333333]'>Copy job URL link</h1>
                    <div>
                        <input type="text" placeholder='https://www.kreate.com/job-apply-325...' className='border border-[#10B981]  py-[5px] px-2' />
                        <button className='bg-[#10B981] text-white py-[6px] px-2'>Copy link</button>
                    </div>
                </div>
                <div className='hidden md:flex flex-col gap-2 '>
                    <h1 className='text-[25px] md:text-[32px] font-medium text-[#333333]'>Recent Jobs</h1>
                    <div className='flex flex-col rounded-xl py-5 px-5  gap-5 border-2 border-[#60EEBF]'>
                        <div className='bg-[#60EEBF] w-full h-[70px] rounded-xl'></div>
                        <div className='bg-[#D9D9D9] w-full h-[70px] rounded-xl'></div>
                        <div className='bg-[#60EEBF] w-full h-[70px] rounded-xl'></div>
                        <div className='bg-[#D9D9D9] w-full h-[70px] rounded-xl'></div>
                        <div className='bg-[#60EEBF] w-full h-[70px] rounded-xl'></div>
                        <div className='bg-[#D9D9D9] w-full h-[70px] rounded-xl'></div>
                    </div>
                    <Link href={""} className='text-[#10B981]'>Learn more</Link>
                </div>
            </div>
        </div>
    )
}

export default JobDetails