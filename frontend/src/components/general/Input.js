import React from "react";

export default function Input({name,type,label}) {
    
    return (
        <>
        <input type={type} name={name} />
        </>
    );
}
