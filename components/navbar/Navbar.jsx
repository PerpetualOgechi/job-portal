"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import "./Navbar.css"
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler"
import Nav from './Nav';

const Navbar = () => {
    const [navLinksOpen, setNavLinksOpen] = useState(false)


    const toggleNavLinks = () => setNavLinksOpen((prev) => !prev)
    return (
        <header className='bg-[#fff] text-[25px] py-7 px-5 md:px-20  navbar'>
            <nav className=' p-0 m-0'>
                <div className="container flex  justify-between items-center relative">
                    <div className='flex gap-36 items-center'>
                        <div className='flex  gap-5 items-center'>
                            {/* <img src="/logo.png" alt="" className='w-[50px]' /> */}
                            <img src="/portal.jpeg" alt="" className='w-[60px]' />
                            <h2 className='text-[25px] md:text-[40px]  font-bold'>StanPay</h2>
                        </div>
                        <div className='hidden md:flex gap-10 items-center'>
                            <Link href="/">Home</Link>
                            <Link href={"/jobs"}>Find Jobs</Link>
                            <Link href={"/savedJobs"}>Saved Jobs</Link>
                        </div>
                    </div>
                    <div className='hidden md:flex gap-10 items-center'>
                        <Link href={""}>Login</Link>
                        <Link href={""} className='bg-[#10B981] text-[24px] rounded-xl py-2 px-8 text-white'>Sign Up</Link>
                    </div>



                    {
                        navLinksOpen &&
                        <OutsideClickHandler
                            onOutsideClick={toggleNavLinks}
                        >

                            <Nav toggleNavLinks={toggleNavLinks} />

                        </OutsideClickHandler>

                    }

                    <div className="md:hidden">
                        <button onClick={toggleNavLinks}><BiMenuAltRight size={30} /></button>
                    </div>





                </div>
            </nav>
        </header>

    )
}

export default Navbar