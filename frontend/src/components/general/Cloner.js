import * as React from "react"
import { redirect } from "react-router-dom";

export default function Cloner({items,children,props,c,rprops}){
    let list= [];
    let renderProps ={...children.props,...props}
    
    for(let item of items){
        //if(children.type=="li")rederProps.key=item[k]
        if(rprops!=undefined||rprops!=null){
            for(let kv of rprops){
                //console.log(kv[0]+" "+item[kv[1]]);
                renderProps = {...renderProps,[kv[0]]:item[kv[1]]}
            }
        }

        list.push(React.cloneElement(<children.type/>,{...renderProps}))
        
    }
    
    //console.log(renderProps)

    return (
        <>
            {list}
        </>
    )
        /*<children.type key={item.key}>
            {React.cloneElement(children.type,
            Object.assign(props,children.props),
            item)}
        </children.type>*/
}