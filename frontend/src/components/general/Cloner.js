import * as React from "react"
import { redirect } from "react-router-dom";

export default function Cloner({items,children,props,rprops}){
    let renderProps ={...children.props,...props}

    const cloned = items.map((item)=>{
        if(rprops!=undefined||rprops!=null){
            for(let kv of rprops){
                //console.log(kv[0]+" "+item[kv[1]]);
                renderProps = {...renderProps,[kv[0]]:item[kv[1]]}
            }
        }
        return(
            <children.type {...renderProps}/>
        )
    })
    
    //console.log(renderProps)

    return (
        <>
            {cloned}
        </>
    )
        /*<children.type key={item.key}>
            {React.cloneElement(children.type,
            Object.assign(props,children.props),
            item)}
        </children.type>*/
}