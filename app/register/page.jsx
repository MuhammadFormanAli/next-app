import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import featuredImg from '@/public/assets/stories/desktop/moon-of-appalacia.jpg'

const Register = () => {
    return (
        <div className='relative py-10 bg-black bg-opacity-25 text-white'>
            <Image className='absolute top-0 left-0 w-full h-full -z-50 object-cover' src={featuredImg} alt="image" />

            <form className='z-10 max-w-[450px] mx-auto flex flex-col gap-4 p-4 border ' >
            <h1 className='font-bold text-lg'>Register Here</h1> 
            <hr />
                <div className='flex flex-col w-full  ' >
                <label htmlFor="name">Name</label>
                <input className=' py-1 bg-transparent border-b outline-none' type="text" name="name" id="name" placeholder='Enter Your Name' />
                </div>

                <div className='flex flex-col w-full  ' >
                <label htmlFor="email">Email</label>
                <input className=' py-1 bg-transparent border-b outline-none' type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>

                <div className='flex flex-col w-full  ' >
                <label htmlFor="password">Password</label>
                <input className=' py-1 bg-transparent border-b outline-none' type="password" name="password" id="password" placeholder='Enter Your Password' />
                </div>

                <input className='w-full p-2  text-black text-lg font-bold hover:text-white hover:bg-black border  transition-all duration-1000 ' type="submit" value="Register" />
                <p>Already have an account <Link className='font-bold text-blue-500 hover:underline' href='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;