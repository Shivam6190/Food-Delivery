import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();

    console.log("error",err);

    return(
        <>
        
        <h2>Oops something went wrong!!</h2>

        </>
    )

};

export default Error;