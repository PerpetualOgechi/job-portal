import React from 'react'
import { jobType } from './constants/Constants'
import Link from 'next/link'
import "./Jobs.css"
import { categories } from './constants/JobConstants'

const Jobs = () => {

    return (
        <div className='pt-36 pb-10 px-5 md:px-32 overflow-x-hidden'>
            <div className='flex flex-col md:px-5 gap-10 '>
                <h1 className='font-medium text-[25px] text-center sb:text-[40px]'>Discover More than <span className='text-[#10B981]'>5000+ Jobs</span></h1>
                <div className='md:px-16 flex flex-col'>
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
                    <div className='flex justify-between md:flex-col md:gap-5 pb-5 md:pb-0'>
                        <div className='flex flex-col gap-5' >
                            <label htmlFor=""
                                className='font-bold text-[20px]'
                            >Job Type</label>

                            <div className='flex flex-col gap-5'>
                                {
                                    jobType.map((type, index) => {
                                        const { name, value } = type
                                        return (
                                            <div key={index} className='flex gap-5'>
                                                {/* <option className='bg-none' value={value}>{name}</option> */}
                                                <input type="checkbox" id="checkbox3" class="peer relative left-0 h-5 w-5 shrink-0 
                                                appearance-none rounded-sm  border-2 border-[#10B981] outline-none after:absolute after:left-0 after:top-0
                                                 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] 
                                                checked:bg-[#10B981] " />
                                                {/* hover:ring hover:ring-gray-300 */}
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
                                    jobType.map((type, index) => {
                                        const { name, value } = type
                                        return (
                                            <div key={index} className='flex gap-5'>
                                                {/* <option className='bg-none' value={value}>{name}</option> */}
                                                <input type="checkbox" id="checkbox3" class="peer relative left-0 h-5 w-5 shrink-0 
                                                appearance-none rounded-sm  border-2 border-[#10B981] outline-none after:absolute after:left-0 after:top-0
                                                 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] 
                                                checked:bg-[#10B981] " />
                                                <label htmlFor="">{name}</label>
                                            </div>

                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-between md:flex-col md:gap-5'>
                        <div className='flex flex-col gap-5' >
                            <label htmlFor=""
                                className='font-bold text-[20px]'
                            >Job Level</label>

                            <div className='flex flex-col gap-5'>
                                {
                                    jobType.map((type, index) => {
                                        const { name, value } = type
                                        return (
                                            <div key={index} className='flex gap-5'>
                                                {/* <option className='bg-none' value={value}>{name}</option> */}
                                                <input type="checkbox" id="checkbox3" class="peer relative left-0 h-5 w-5 shrink-0 
                                                appearance-none rounded-sm  border-2 border-[#10B981] outline-none after:absolute after:left-0 after:top-0
                                                 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] 
                                                checked:bg-[#10B981] " />
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
                                    jobType.map((type, index) => {
                                        const { name, value } = type
                                        return (
                                            <div key={index} className='flex gap-5'>
                                                {/* <option className='bg-none' value={value}>{name}</option> */}
                                                <input type="checkbox" id="checkbox3" class="peer relative left-0 h-5 w-5 shrink-0 
                                                appearance-none rounded-sm  border-2 border-[#10B981] outline-none after:absolute after:left-0 after:top-0
                                                 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] 
                                                checked:bg-[#10B981] " />
                                                <label htmlFor="">{name}</label>
                                            </div>

                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full pb-10 md:flex-1'>
                    <div className='flex justify-between  py-5 md:px-5'>
                        <div>
                            <h1>All Jobs</h1>
                            <p>Showing 22 results</p>
                        </div>
                        <div>
                            <h1>Sort by: <span>Most relevant</span></h1>
                        </div>
                    </div>
                    <div className='md:px-5 flex flex-col gap-5'

                    >
                        {
                            categories.map((category, index) => {
                                const { companyName, type, title, location, nrs, desc, id } = category
                                return (
                                    <Link key={index} href={`jobs/${id}`} className='bg-white rounded-xl py-5 px-5 flex flex-col gap-5 justify-center border-2 border-black job'>
                                        <div className='md:flex gap-5 '>
                                            <div className=''>
                                                <img src="grey-dot.svg" alt="" />
                                            </div>
                                            <div className='w-full'>
                                                <div className='w-full '>
                                                    <div className='flex justify-between '>

                                                        <h1 className='text-[18px] md:text-[25px] font-medium text-[#3b3b3b]'>{title}</h1>


                                                        <div className='flex flex-col justify-center items-center'>
                                                            <img src="bookmark-border.svg" sizes={10} alt="" />
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



                                                    <Link key={index} href={`applications/${id}`} className='bg-[#10B981] text-[#fff] py-3 px-10 rounded-xl'>Apply Now</Link>

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