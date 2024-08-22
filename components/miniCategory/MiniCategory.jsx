import React from 'react'

const MiniCategory = () => {
    const categories = [
        {
            name: "Design",
            desc: "200+ jobs available",
            image: "/design.svg"
        },
        {
            name: "Sales",
            desc: "200+ jobs available",
            image: "/sales.svg"
        },
        {
            name: "Marketing",
            desc: "200+ jobs available",
            image: "/marketing.svg"
        },
        {
            name: "Finance",
            desc: "200+ jobs available",
            image: "/finance.svg"
        },
        {
            name: "Tecnology",
            desc: "200+ jobs available",
            image: "/technology.svg"
        },
        {
            name: "Engineering",
            desc: "200+ jobs available",
            image: "/engineering.svg"
        },
        {
            name: "Business",
            desc: "200+ jobs available",
            image: "/business.svg"
        },
        {
            name: "Human Resource",
            desc: "200+ jobs available",
            image: "/resources.svg"
        }
    ]
    return (
        <div className='bg-[#60EEBF] flex flex-col py-10 px-5 md:px-36 overflow-x-hidden'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-[40px]'>Explore by
                    <span className='text-[#10B981]'> Categories</span>
                </h1>
                <div className='flex gap-5 items-center'>
                    <h2 className='font-bold text-[25px]'>Show all jobs</h2>
                    <img src="Arrow 1.svg" alt="" className='w-[40px]' />
                </div>
            </div>

            <div>
                <div className='px-8 py-8 pb-36 '
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                        gridGap: "50px",
                        marginTop: "50px",


                    }}
                >
                    {
                        categories.map((category, index) => {
                            const { name, desc, image } = category
                            return (
                                <div key={index} className='bg-white rounded-xl px-5 py-10 flex flex-col gap-5 justify-center '>
                                    <img src={image} alt="" className='w-[50px] h-[50px]' />
                                    <h1 className='text-[18px] font-medium text-[#3b3b3b]'>{name}</h1>
                                    <div className='flex justify-between'>
                                        <p>{desc}</p>
                                        <img src="Arrow 1.svg" alt="" className='w-[35px]' />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='hidden bg-white w-full justify-between items-center rounded-md  py-10 pl-10  md:flex pr-36'>
                    <div>
                        <h1 className='font-medium text-center text-[30px] sb:text-[44px]'>Get <span className='text-[#10B981]'>Job Alart</span> ?</h1>
                    </div>

                    <div className='gap-5 md:flex '>
                        <div className='border-4 rounded-3xl border-[#10B981] p-5 flex '>
                            <input type="text" placeholder='Enter Your Email' className='w-full outline-none text-[16px]' />

                        </div>
                        <button className='bg-[#10B981]  px-8 text-[20px] text-white rounded-2xl md:ml-[-50px]'>Search</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MiniCategory