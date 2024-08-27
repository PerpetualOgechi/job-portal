import Link from 'next/link'
import React from 'react'

const Nav = ({ toggleNavLinks }) => {
    return (
        <div className='absolute flex flex-col p-5 bg-white rounded top-[80px] right-5 gap-5 shadow-xl'>

            <Link href="/" onClick={toggleNavLinks}>Home</Link>
            <Link href={"/jobs"} onClick={toggleNavLinks}>Find Jobs</Link>
            <Link href={"/savedJobs"} onClick={toggleNavLinks}>Saved Jobs</Link>
            <Link href={""} onClick={toggleNavLinks}>Login</Link>
            <Link href={""} onClick={toggleNavLinks} className='bg-[#10B981] text-[24px] rounded-xl py-2 px-8 text-white'>Sign Up</Link>

        </div>
    )
}

export default Nav