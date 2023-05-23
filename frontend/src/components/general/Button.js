import * as React from "react"
import { useNavigate } from "react-router-dom"

export default function Button({href,className,children,onClick}) {
    const bttn = <button className={`bttn ${className}`} onClick={onClick}>{children}</button>
    return (
        <>
        {href != undefined?
        <a href={href}>
            {bttn}
        </a>
        :
            bttn
        }
        
        </>
    )
}

