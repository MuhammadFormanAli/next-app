'use client'

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Loader from '../loading/Loading';

const LoginButton = () => {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div className={`bg-black px-6 py-3  tracking-[3px] font-bold text-white hover:underline`}>Loading</div>
    if (error) return <div>{error.message}</div>;
  
    return (
        <>
        {user?<Link className={`bg-black px-6 py-3  tracking-[3px] font-bold text-white hover:underline`} href='/api/auth/logout'>LOGOUT</Link>:<Link className='bg-black px-6 py-3  tracking-[3px] font-bold text-white hover:underline ' href='/api/auth/login'>LOGIN</Link>}
      </>
    );
};

export default LoginButton;







