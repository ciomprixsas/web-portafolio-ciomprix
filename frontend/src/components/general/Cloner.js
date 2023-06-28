import * as React from 'react'

export default function Cloner({items,children,childrenProps,rprops,lim}){
    //Inicializacion de pros hijos
    let renderProps ={...children.props,childrenProps}
    let localItems = (lim)?items.slice(lim,items.length-1):items

    const cloned = localItems.map((item)=>{
        if(rprops!=undefined||rprops!=null){
            //Asignacion de props relativos a los items
            for(let kv of rprops){
                renderProps = {...renderProps,[kv[0]]:item[kv[1]]}
            }
        }
        return(
            <children.type {...renderProps}/>
        )
    })

    return (
        <>
            {cloned}
        </>
    )
}