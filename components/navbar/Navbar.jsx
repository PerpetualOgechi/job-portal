import Link from 'next/link'
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='flex justify-between overflow-x-hidden bg-[#fff] items-center md:px-20 py-5 font-medium text-[30px] text-[#3d3d3d] navbar'>
            <div className='flex gap-36 items-center'>
                <div className='flex  gap-5 items-center'>
                    <img src="logo.png" alt="" className='w-[50px]' />
                    <h2 className='text-[40px]  font-bold'>Kreate</h2>
                </div>
                <div className='hidden md:flex gap-10 items-center'>
                    <Link href="/">Home</Link>
                    <Link href={"/jobs"}>Find Jobs</Link>
                    <Link href={""}>Post Jobs</Link>
                </div>
            </div>
            <div className='hidden md:flex gap-10 items-center'>
                <Link href={""}>Login</Link>
                <Link href={""} className='bg-[#10B981] text-[24px] rounded-xl py-2 px-8 text-white'>Sign Up</Link>
            </div>
        </div>
    )
}

export default Navbar