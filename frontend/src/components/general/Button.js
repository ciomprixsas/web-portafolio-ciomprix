import * as React from "react"

export default function Button({name,type}) {
    
    return (
        <>
        <button className='bg-red-100 p-2 m-2 hover:bg-red-200 rounded-2xl'>{name}</button>
        </>
    )
}

