import React from 'react'

const Applications = () => {
    return (
        <div className='pt-36 pb-10 px-5  md:px-20'>
            <h1 className=' font-[600] text-[24px] md:text-[40px] pb-5'>Job Application</h1>
            <form className='border p-5 rounded-lg flex flex-col gap-10'>
                <div className='flex flex-col justify-between gap-10 md:flex-row'>
                    <div className='flex flex-1 flex-col gap-3'>
                        <label
                            className=' font-[500] text-[20px] md:text-[25px]'
                            htmlFor="">Enter Full Name</label>
                        <input type="text" placeholder='Enter your full name'
                            className='border outline-none p-3 rounded-md w-full'
                        />
                    </div>
                    <div className='flex flex-1 flex-col gap-3'>
                        <label
                            className=' font-[500] text-[20px] md:text-[25px]'
                            htmlFor="">Enter Email</label>
                        <input type="email" placeholder='Enter your Email'
                            className='border outline-none p-3 rounded-md w-full'
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-10 md:flex-row'>
                    <div className='flex flex-1 flex-col gap-3'>
                        <label
                            className=' font-[500] text-[20px] md:text-[25px]'
                            htmlFor="">Upload CV

                        </label>
                        <input type="file" className='' />
                    </div>
                    <div className='flex flex-1 flex-col gap-3'>
                        <label
                            className=' text-[20px] md:text-[25px] flex flex-col gap-3'
                            htmlFor="file-upload"><span className=' font-[500]'>Upload Cover Letter</span>
                            <div className='border border-dashed '><span className='text-[#696969] '>Drag and drop or</span> browse files</div>
                            <input id='file-upload' type="file" placeholder='Enter your Email'
                                className='hidden'
                            />
                        </label>

                    </div>
                </div>
                <div className='flex flex-1 flex-col gap-3'>
                    <label
                        className=' font-[500] text-[20px] md:text-[25px]'
                        htmlFor="">Write a message</label>
                    <textarea
                        className='border p-5 rounded-lg min-h-[300px] w-full'
                        placeholder='Write your message'
                        name="" id=""></textarea>
                </div>
                <button className='bg-[#10B981] text-white w-full py-2 text-[29px] rounded-md'>Submit Application</button>
            </form>
        </div>
    )
}

export default Applications