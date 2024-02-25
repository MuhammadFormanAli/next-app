'use client'

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Loader from "../loading/Loading";
const PrivateRoute = ({ children }) => {

    const { user, error, isLoading } = useUser();
    const router = useRouter()

    if (isLoading) return <Loader />
    if (error) return <div>{error.message}</div>;

    if(!user){
        return  router.push('/register')
    }
    else{
        return children;
    }
  
};

export default PrivateRoute;
