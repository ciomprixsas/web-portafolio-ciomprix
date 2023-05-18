import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Link({url,children}) {
    const navigate = useNavigate();

    const handleLinkOnClick=(url)=>{
        navigate(url);
    }

    console.log(children);

    const newChildren = 
        <>
        {React.cloneElement(
            <children.type></children.type>,
            Object.assign(children.props))}
        </>
    
    return (
        <>
        {newChildren}
        </>
    );
}
