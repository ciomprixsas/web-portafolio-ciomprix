import * as React from "react"

export default function List({items,children,props,c,rprops}){
    
    function listMaker(){
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
            //console.log(renderProps)
            if(c!=undefined || c!=null){
                list.push(React.cloneElement(<children.type/>,{...renderProps},item[c]))
            }
            else{
                list.push(React.cloneElement(<children.type/>,{...renderProps}))
            }
            
        }

        return list
    }


    return (
        <>
            {listMaker()}
        </>
    )
        /*<children.type key={item.key}>
            {React.cloneElement(children.type,
            Object.assign(props,children.props),
            item)}
        </children.type>*/
}