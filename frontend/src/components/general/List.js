import * as React from "react"

export default function List({items,children,props,k,rprops}){
    
    function listMaker(){
        let list= [];
        let rederProps ={...children.props,...props}

        


        for(let item of items){
            //if(children.type=="li")rederProps.key=item[k]
            if(rprops!=undefined||rprops!=null){
                for(let kv of rprops){
                    console.log(kv[0]+" "+item[kv[1]]);
                    rederProps = {...rederProps,[kv[0]]:item[kv[1]]}
                }
            }
            list.push(React.cloneElement(<children.type/>,{...rederProps,key:item.id},item.title))
        }

        //console.log(list)

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