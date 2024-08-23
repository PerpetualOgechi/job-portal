import React from 'react'

const Applications = () => {
    return (
        <div>
            <h1>Job Application</h1>
            <form >
                <div>
                    <div>
                        <label htmlFor="">Enter Full Name</label>
                        <input type="text" placeholder='Enter your full name' />
                    </div>
                    <div>
                        <label htmlFor="">Enter Email</label>
                        <input type="email" placeholder='Enter your Email' />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Upload CV</label>
                        <input type="file" placeholder='Enter your full name' />
                    </div>
                    <div>
                        <label htmlFor="">Upload Cover Letter</label>
                        <input type="file" placeholder='Enter your Email' />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Write a message</label>
                    <textarea name="" id=""></textarea>
                </div>
            </form>
        </div>
    )
}

export default Applications