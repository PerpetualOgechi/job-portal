import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col-reverse gap-5 justify-between items-center pt-36 px-5 md:px-36 pb-20 md:flex-row overflow-x-hidden relative'>
            <div className='w-full flex flex-col items-center md:w-[50%]'>
                <h1 className='font-[600] text-[50px] md:text-[50px]'>
                    <span className=''>Your Dream</span><br />
                    <span className='text-[rgb(16,185,129)]'>Job Is Waiting</span>
                </h1>
                <h4 className='font-bold text-[50px] md:text-[64px] mb-10'>5000+ Jobs</h4>
                <div className='flex flex-col gap-4 md:flex-row  md:gap-0'>
                    <div className='border-2 border-[#10B981] flex pl-5 py-3 gap-5 rounded-s-sm'>
                        <img src="search-icon.svg" alt="" className='w-[30px]' />
                        <input type="text" placeholder='Enter job title' />


                    </div>
                    <div className='border-2 border-[#10B981] md:ml-[-1px] flex pl-5 py-3 gap-5'>
                        <img src="location-icon2.png" alt="" className='w-[30px]' />
                        <input type="text" placeholder='Search Location' />
                    </div>
                    <button className='bg-[#10B981] md:ml-[-50px] px-8 text-[20px] text-white rounded-2xl'>Search</button>
                </div>
            </div>
            <div className='w-[300px] md:w-[50%]'>
                <img src="hero-image.png" alt="" className='w-full' />
            </div>
        </div>
    )
}

export default Hero