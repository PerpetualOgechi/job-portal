import React from 'react'

const MiniCategory = () => {
    const categories = [
        {
            name: "Design",
            desc: "200+ jobs available"
        },
        {
            name: "Sales",
            desc: "200+ jobs available"
        },
        {
            name: "Marketing",
            desc: "200+ jobs available"
        },
        {
            name: "Finance",
            desc: "200+ jobs available"
        },
        {
            name: "Tecnology",
            desc: "200+ jobs available"
        },
        {
            name: "Engineering",
            desc: "200+ jobs available"
        },
        {
            name: "Business",
            desc: "200+ jobs available"
        },
        {
            name: "Human Resource",
            desc: "200+ jobs available"
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
                <div className='px-8 py-8 pb-36 relative'
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                        gridGap: "50px",
                        marginTop: "50px",


                    }}
                >
                    {
                        categories.map((category, index) => {
                            const { name, desc } = category
                            return (
                                <div key={index} className='bg-white rounded-xl px-5 py-5  flex flex-col gap-5 justify-center h-[250px]'>
                                    <h1 className='text-[18px] mt-10 font-medium text-[#3b3b3b]'>{name}</h1>
                                    <div className='flex justify-between'>
                                        <p>{desc}</p>
                                        <img src="Arrow 1.svg" alt="" className='w-[35px]' />
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='bg-white w-full justify-between items-center rounded-md absolute  py-10 pl-10  bottom-[-100px] sb:flex pr-36'>
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
        </div>
    )
}

export default MiniCategory