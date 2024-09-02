import React from 'react'
import { about, locations, services, socials } from './FooterConstants'
import Link from 'next/link'


const Footer = () => {
    return (

        <div className='border-top-2 text-[#616161] bg-[#60EEBF]'>
            <div className='flex py-10 gap-10 px-5'>
                <div className='hidden md:w-[25%] md:flex gap-3'>
                    {/* <Link href="/"> */}
                    {/* <img src="/portal.jpeg" alt="" className='w-[50px] h-[50px]' /> */}
                    <h2 className='text-[40px]  font-bold'>StanPay</h2>
                    {/* </Link> */}
                </div>
                <div className=' flex-1 text-center  lg:text-left'
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                        gridGap: "50px",
                        // marginTop: "30px",


                    }}
                >
                    <div>
                        <h1 className='font-bold text-[18px] mb-3 text-[#1C3552]'>About</h1>
                        {
                            about?.map(Item => {
                                const { name } = Item
                                return (
                                    <Link href={""} key={name}>
                                        <h1>{name}</h1>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h1 className='font-bold text-[18px] mb-3 text-[#1C3552]'>Our Services</h1>
                        {
                            services?.map(Item => {
                                const { name } = Item
                                return (
                                    <Link href={""} key={name}>
                                        <h1>{name}</h1>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h1 className='font-bold text-[18px] mb-3 text-[#1C3552]'>Socials</h1>
                        {
                            socials?.map(Item => {
                                const { name } = Item
                                return (
                                    <Link href={""} key={name}>
                                        <h1>{name}</h1>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h1 className='font-bold text-[18px] mb-3 text-[#1C3552]'>Locations</h1>
                        {
                            locations?.map(Item => {
                                const { name } = Item
                                return (
                                    <Link href={""} key={name}>
                                        <h1>{name}</h1>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
            <div className='border-t flex justify-center py-10 items-center'>Copyright @ 2024, All Rights Reserved</div>
        </div>
    )
}

export default Footer