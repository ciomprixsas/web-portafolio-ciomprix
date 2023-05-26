import * as React from "react";
import { useNavigate } from "react-router-dom";

const Link = ({href,className,children}) => {
    const navigator = useNavigate()

    const handleToNavigate = () =>{
        navigator(href)
    }

    return (
        <>
            <button className={className} onClick={handleToNavigate}>
                {children}
            </button>
        </>
    );
}
    export default Link