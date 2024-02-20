import React from 'react';
import logo from '@/public/assets/shared/desktop/logo.svg'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='h-[72px] w-full text-[12px] tracking-[3px] font-bold  bg-white flex items-center justify-evenly'>
            
            <Link href="/"><Image src={logo} alt="logo" /></Link>
            <div className='flex justify-between'>
                <ul className='flex gap-6 text-black '>
                    <li><Link href="/stories">STORIES</Link></li>
                    <li><Link href="/features">FEATURES</Link></li>
                    <li><Link href="/pricing">PRICING</Link></li>
                </ul>
            </div>
                <button className='bg-black px-6 py-3  tracking-[3px] font-bold text-white'>GET AN INVITE</button>
        </div>
    );
};

export default Navbar;