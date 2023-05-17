import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Link({url,children,styles}) {
    const navigate = useNavigate();

    console.info(children);

    const handleLinkOnClick=(url)=>{
        navigate(url);
    }
    
    return (
        <>
        <a className={styles} onClick={handleLinkOnClick} href={url}>{children} </a>
        </>
    );
}
