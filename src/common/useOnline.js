import { useState } from 'react';

const useOnline = () => {
    
    const [isOnline,setIsOnline] = useState(true); 

    window.addEventListener("online", () =>{
        console.log("Person is online");
        setIsOnline(true);
    })
    
    window.addEventListener("offline", () =>{
        console.log("Person is offline");
        setIsOnline(false);
    })

    return isOnline;
};

export default useOnline;