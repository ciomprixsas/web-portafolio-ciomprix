import React from 'react'
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum'

 const Lorem = ({long}) => {

    const lorem = (l) =>{
        let text=loremIpsum()[0]
        let returnText=''
    
        for(let i=0;i<l;i++){
          returnText+=text.charAt(i)
        }
        return returnText
    }
    return (
        <>
        {lorem(long)}
        </>
    )
}

export default Lorem