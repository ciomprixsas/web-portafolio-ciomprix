import React from "react"
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum'

export default function Lorem({long}) {

    const lorem = (l) =>{
        let text=loremIpsum()[0]
        let returnText=""
    
        for(let i=0;i<l;i++){
          returnText+=text.charAt(i)
        }
        console.log(returnText)
        return returnText
    }
    return (
        <>
        {lorem(long)}
        </>
    )
}

