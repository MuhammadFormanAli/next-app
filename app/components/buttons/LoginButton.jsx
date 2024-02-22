'use client'

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const LoginButton = () => {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
    if (error) return <div>{error.message}</div>;
  
    return (
        <button type="button" class="bg-indigo-500 ..." disabled>
        {user?<Link href='/api/auth/logout'>Logout</Link>:<Link href='/api/auth/login'>Login</Link>}
      </button>
    );
};

export default LoginButton;


