import React from "react";
const PrivateRoute = ({ children }) => {
    const user = false
    if(!user){
        return (
            <div>You Do not Have Access</div>
        )
    }
    else{
        return children;
    }
  
};

export default PrivateRoute;
