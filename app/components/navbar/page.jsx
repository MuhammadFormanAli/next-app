import React from 'react';
import logo from '@/public/assets/shared/desktop/logo.svg'
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='h-[72px] w-full text-[12px] tracking-[3px] font-bold  bg-white flex items-center justify-evenly'>
            <Image src={logo} alt="logo" />
            <div className='flex justify-between'>
                <ul className='flex gap-6 text-black '>
                    <li>STORIES</li>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                </ul>
            </div>
                <button className='bg-black px-6 py-3  tracking-[3px] font-bold '>GET AN INVITE</button>
        </div>
    );
};

export default Navbar;